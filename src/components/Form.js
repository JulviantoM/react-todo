import React from 'react';

import './Form.css';

const Form = () => {
	function addTodo(e){
		e.preventDefault()
		const form = document.getElementById('Form')
		const todo = document.getElementById("add-input").value
		if(todo !== ""){
			const par = document.createElement('li')
			par.innerHTML = todo
			par.style = "text-align: left; padding-bottom: 10px;"
			form.appendChild(par)
		} else {
			alert("Please insert a todo !!!")
		}
	}
	return (
		<div className="Form" id="Form">
			<form id="add-form">
				<input id="add-input" type="text" placeholder="Enter to do"/>
				<button id="submit-input" type="submit" onClick={addTodo}>Add</button>
			</form>
		</div>
	);
}

export default Form;
