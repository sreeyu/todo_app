import styles from './TodoItem.module.css'

function TodoItem(props){

    const deleteTask = () =>{
        props.onDelete(props.id);
    };
    
    return(
        <li className={styles['todo-item']} onClick={deleteTask}>
            {props.children}
        </li>
    );
};

export default TodoItem;