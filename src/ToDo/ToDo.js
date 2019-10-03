import React from 'react';


function Todo({ items, id, status, removeTodo }) {
  return (
    <div className="toDo__contenedor">     
    <label htmlFor="checkbox_id">{items.name}</label>     
    <div className="toDo__remove" onClick={() => removeTodo(id)}>Eliminar tarea</div>
    </div>
  );
}
export default Todo;