import './App.css';
import { Text } from './components/polymorphic/Text';
function App() {
  return (
    <div className="App">
      <Text as='h1' size="small" color="primary">Hello World</Text>
    </div>
  );
}

export default App;
