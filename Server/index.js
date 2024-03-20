const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const TodoModel=require('./Models/Todo')
const app=express()
app.use(cors(
    {
        origin: [''],
        methods: ['POST','GET','DELETE','PUT'],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect('mongodb+srv://pragatibhat633:todolist@cluster0.sdbidum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.get('/get',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    console.log(id);
    TodoModel.findByIdAndUpdate({_id:id},{done: true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.listen(4001,()=>{
    console.log("Server is running")
})
