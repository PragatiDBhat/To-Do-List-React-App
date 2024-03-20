import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
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
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form className="create_form">
        <input
          type="text"
          placeholder="Enter Task"
          value={task} // Use value attribute to set the value of the input field
          onChange={handleChange}
        />
        <button type="button" onClick={handleAdd}>ADD</button>
      </form>
    </div>
  );
}

