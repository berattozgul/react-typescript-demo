import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { Counter } from './components/class/Counter';
function App() {
  return (
    <div className="App">
      <Counter message='Hello Darkness my old friend'/>
    </div>
  );
}

export default App;
