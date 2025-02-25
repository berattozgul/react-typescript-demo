import './App.css';
import {List} from './components/generics/List';

function App() {
  return (
    <div className="App">
     <List items={[{
      id: 1,
      name: 'item1'}, {id: 2,name: 'item2'}, {id: 3,name: 'item3'}]} onClick={(item) => {console.log(item)}} />
    </div>
  );
}

export default App;
