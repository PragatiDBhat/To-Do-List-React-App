const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

const app = express();
const PORT = process.env.PORT || 4040;

// CORS middleware setup
app.use(cors({
    origin: ['*'],
    methods: ['POST', 'GET', 'DELETE', 'PUT','HEAD','OPTIONS'],
    credentials: false,
    allowedHeaders: ['Content-Type']
}));

// Body parser middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://pragatibhat633:todolist@cluster0.sdbidum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

// Define routes
app.get('/get', async (req, res) => {
    try {
        const result = await TodoModel.find();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndUpdate({ _id: id }, { done: true });
        res.json({ message: 'Todo updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await TodoModel.findByIdAndDelete({ _id: id });
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/add', async (req, res) => {
    try {
        const { task } = req.body;
        const newTodo = await TodoModel.create({ task });
        res.json(newTodo);
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log("Server is running");
});
