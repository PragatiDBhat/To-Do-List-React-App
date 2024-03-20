import React, { useEffect, useState } from 'react';
import Create from './Create';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import axios from 'axios';

export default function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://todolistreactbackend.vercel.app/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        axios.put('https://todolistreactbackend.vercel.app/update/${id}')
            .then(result => { 
                console.log(result);
                location.reload(); 
            })
            .catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete('https://todolistreactbackend.vercel.app/delete/${id}')
            .then(result => { 
                console.log(result);
                location.reload(); 
            })
            .catch(err => console.log(err));
    }

    const handleAdd = (task) => {
        axios.post('https://todolistreactbackend.vercel.app/add', { task }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false
        })
        .then(result => {
            console.log(result);
            location.reload();
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="home">
            <h2>To Do List</h2>
            <Create onAdd={handleAdd} />
            {todos.length === 0 ? (
                <div><h2>No Record</h2></div>
            ) : (
                todos.map(todo => (
                    <div className='task' key={todo._id}>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done ? 
                            <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill> :
                            <BsCircleFill className='icon'></BsCircleFill>}
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
