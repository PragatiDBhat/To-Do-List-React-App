import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => {location.reload()})
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {  // Define handleChange function to capture the event
    setTask(e.target.value); // Update the task state with the value of the input field
  };

  return (
    <div>
      <form className="create_form">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={handleChange} // Pass the event to handleChange function
        />
        <button type="button" onClick={handleAdd}>ADD</button>
      </form>
    </div>
  );
}
