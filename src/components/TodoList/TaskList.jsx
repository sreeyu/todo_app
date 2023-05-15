import './TaskList.css'
import TodoItem from './TodoItem';

function TaskList(props){

    return (
        <ul className='task-list'>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    onDelete={props.onDeleteTodo}>
                        {todo.task}
                    </TodoItem>
            ))}
        </ul>
    )
};

export default TaskList;