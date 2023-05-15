import React, { useState } from 'react';
import './TaskInput.css';
import TaskButton from './TaskButton';

function TaskInput(props){

    const [enteredTodo, setEnteredTodo] = useState('');
    const [isValid, setIsvalid] = useState(true);

    const getTodoInput = (event) => {
        if(event.target.value.trim().length !== 0){
            setIsvalid(true);
        }
        setEnteredTodo(event.target.value);
    };

    const submitForm = (event) =>{
        event.preventDefault();
        if(enteredTodo.trim().length === 0){
            setIsvalid(false);
            return;
        }
        props.onInput(enteredTodo);
    };
    
    return (
        <form onSubmit={submitForm}>
            <div className={`form-input ${isValid ? '' : 'invalid'}`}>
                <label>Enter Task</label>
                <input type="text" onChange={getTodoInput} />
            </div>
            <TaskButton type='submit' >Add Task</TaskButton>
        </form>
    );
}

export default TaskInput;