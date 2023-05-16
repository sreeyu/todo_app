import React, { useState } from 'react';
import styles from './TaskInput.module.css';
import TaskButton from './TaskButton';

function TaskInput(props){

    const [enteredTodo, setEnteredTodo] = useState("");
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
        setEnteredTodo("");
    };

    const handleKey = (event) =>{
        if (event.key === "Enter"){
            submitForm(event);
        }
    };
    
    return (
        <form onSubmit={submitForm}>
            <div className={`${styles["form-input"]} ${isValid ? '' : styles.invalid}`}>
                <label>Enter Task</label>
                <input value={enteredTodo} type="text" onChange={getTodoInput} onKeyDown={handleKey} />
            </div>
            <TaskButton type='submit' >Add Task</TaskButton>
        </form>
    );
}

export default TaskInput;