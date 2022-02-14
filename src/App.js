import './App.css';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import { GlobalProvider } from './context/GlobalState';

function App() {


  return (
    <div className="App">
      <GlobalProvider>
        <AddTask />
        <TaskList />
      </GlobalProvider>
    </div>
  );
}

export default App;
