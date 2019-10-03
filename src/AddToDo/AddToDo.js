import React, { useState } from "react";
const shortid = require('shortid');

function AddToDo({ addTodo }) {
    const [value, setValue] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    const nuevalista = {
        id: shortid.generate(),
        name: value,
        status: false
    }
    addTodo(nuevalista)
    setValue("")
};
  
    return (
        <div className="AddToDo--container">
        <h2 style={{fontSize:"14px"}}>Añadir una nueva tarea</h2>
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        </form>
        </div>
    );
  }
  export default AddToDo;