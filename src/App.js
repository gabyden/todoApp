import React, { useState } from "react";
import AddToDo from './AddToDo/AddToDo';
import ToDo from './ToDo/ToDo';
import './App.css';
const shortid = require('shortid');

function App() {

	const [todos, setTodos] = useState([
		{
			id: shortid.generate(),
			name: "Estudiar React",
			status: false
		},
		{
			id: shortid.generate(),
			name: "Hacer ejercicio",
			status: false
		},
		{
			id: shortid.generate(),
			name: "Mirar series",
			status: false
		}
	]);

	const addTodo = lista => {
		let newTodos = todos ? [...todos, lista] : [lista]
		setTodos(newTodos);
	};
	const removeTodo = id => {
		const newTodos = [...todos];
		let removeData = newTodos.filter(item => item.id !== id);
		setTodos(removeData);
	};


	return (
		<div className="App" style={{ textAlign: "center", margin: "0px auto" }}>
			<h1>{todos.title}<span role="img" aria-label="emoji">👩🏽‍💻</span></h1>
			<AddToDo addTodo={addTodo} />
			{todos.map((item, index) =>
				<ToDo
					items={item}
					id={item.id}
					key={item.id}
					status={item.status}
					removeTodo={removeTodo}
				/>

			)}
		</div>
	);
}

export default App;