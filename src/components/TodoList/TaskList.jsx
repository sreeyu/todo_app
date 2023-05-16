import styles from './TaskList.module.css'
import TodoItem from './TodoItem';

function TaskList(props){

    return (
        <ul className={styles['task-list']}>
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