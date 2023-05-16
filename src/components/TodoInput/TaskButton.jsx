import styles from './TaskButton.module.css'

function TaskButton(props){
    
    return(
    <button type={props.type} className={styles.btn} onClick={props.onClick}>
        {props.children}
        </button>
    );
};

export default TaskButton;