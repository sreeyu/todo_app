import './TaskInput.css'
import TaskButton from './TaskButton';

function TaskInput(){
    return (
        <form>
            <div className="form-input">
                <label >Enter Task</label>
                <input type="text" />
            </div>
            <TaskButton type='submit' />
        </form>
    );
}

export default TaskInput;