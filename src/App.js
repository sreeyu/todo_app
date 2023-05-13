import './App.css';
import TaskInput from './components/TodoInput/TaskInput';
import TaskList from './components/TodoList/TaskList';

function App() {

  const dummyList = [
    {task: 'Coding', id:'t1'},
    {task: 'Journel', id:'t2'}
  ];
  
  return (
    <div className="App">
      <section id='task-input'>
        <TaskInput />
      </section>
      <section id='tasks'> 
        <TaskList todos={dummyList} />
      </section>
    </div>
  );
}

export default App;
