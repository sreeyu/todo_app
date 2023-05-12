import './App.css';
import TodoInput from './components/TodoInput/TaskInput';

function App() {
  return (
    <div className="App">
      <div id='tasks'>
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
