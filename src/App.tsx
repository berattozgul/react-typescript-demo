import './App.css';
import { RandomNumber } from './components/ref/restriction/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive={true} />
    </div>
  );
}

export default App;
