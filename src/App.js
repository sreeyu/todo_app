import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TodoInput/TaskInput';
import TaskList from './components/TodoList/TaskList';

function App() {

  const [newTask, setNewTask] = useState([
    {task: 'Coding', id:'t1'},
    {task: 'Journel', id:'t2'}
  ]);

  const getTask = (newTask) =>{
    setNewTask(prevTask => {
      const taskList = [...prevTask];
      taskList.unshift({task: newTask, id: Math.random().toString()});
      return taskList;
    });
  };
  
  return (
    <div className="App">
      <section id='task-input'>
        <TaskInput onInput={getTask} />
      </section>
      <section id='tasks'> 
        <TaskList todos={newTask} />
      </section>
    </div>
  );
}

export default App;
