import styles from './TodoItem.module.css'

function TodoItem(props){

    const deleteTask = () =>{
        props.onDelete(props.id);
    };
    
    return(
        <li className={styles['todo-item']} >
            <input type="checkbox" />
            <span>{props.children}</span>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
};

export default TodoItem;