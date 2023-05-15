import './TodoItem.css'

function TodoItem(props){

    const deleteTask = () =>{
        props.onDelete(props.id);
    };
    
    return(
        <li className='todo-item' onClick={deleteTask}>
            {props.children}
        </li>
    );
};

export default TodoItem;