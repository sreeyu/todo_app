import './TaskButton.css'

function TaskButton(props){
    
    return(
    <button type={props.type} className='btn' onClick={props.onClick}>
        {props.children}
        </button>
    );
};

export default TaskButton;