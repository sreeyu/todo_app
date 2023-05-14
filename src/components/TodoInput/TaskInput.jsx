import React, { useState } from 'react';
import './TaskInput.css';
import TaskButton from './TaskButton';

function TaskInput(props){

    const [enteredTodo, setEnteredTodo] = useState('');

    const getTodoInput = (event) => {
        setEnteredTodo(event.target.value);
    };

    const submitForm = (event) =>{
        event.preventDefault();
        props.onInput(enteredTodo);
    };
    
    return (
        <form onSubmit={submitForm}>
            <div className="form-input">
                <label >Enter Task</label>
                <input type="text" onChange={getTodoInput} />
            </div>
            <TaskButton type='submit' >Add Task</TaskButton>
        </form>
    );
}

export default TaskInput;