import './TodoItem.css'

function TodoItem(props){
    
    return(
        <li className='todo-item'>
            {props.children}
        </li>
    );
};

export default TodoItem;