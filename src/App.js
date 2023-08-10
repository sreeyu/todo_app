import React, { useState } from 'react';
import styles from './App.module.css';
import TaskInput from './components/TodoInput/TaskInput';
import TaskList from './components/TodoList/TaskList';

function App() {

  const [newTask, setNewTask] = useState([
    {task: 'Buy groceries for the week', id:'t1'},
    {task: 'Learn to juggle three balls', id:'t2'}
  ]);

  const getTask = (newTask) =>{
    setNewTask(prevTask => {
      const taskList = [...prevTask];
      taskList.unshift({task: newTask, id: Math.random().toString()});
      return taskList;
    });
  };

  const deleteTodo = (todoId) => {
    setNewTask(prevTask => {
      const taskList = prevTask.filter(task => task.id !== todoId);
      return taskList;
    });
  };

  let content = (
    <p style={{textAlign: 'center'}}>Tick-tock, time to rock! Add a task and let's make things happen.</p>
  )

  if (newTask.length > 0){
    content =(
      <TaskList todos={newTask} onDeleteTodo={deleteTodo} />
    );
  }
  
  return (
    <div className={styles.App}>
      <section id={styles['task-input']}>
        <TaskInput onInput={getTask} />
      </section>
      <section id={styles.tasks}> 
        {content}
      </section>
    </div>
  );
}

export default App;
