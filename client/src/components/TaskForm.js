import React, { useState } from 'react';

const TaskForm = ({addTask}) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <textarea value={userInput} type="text" onChange={handleChange} placeholder="Enter quest..."></textarea>
      <button>Add Quest +</button>
    </form>
  )
}

export default TaskForm;