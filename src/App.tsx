import './App.css';
import { Greet } from './components/Greet';
import {Person} from './components/Person'
import {PersonList} from './components/PersonList'
import {Status} from './components/Status'
import {Heading} from './components/Heading'
import {Oscar} from './components/Oscar'
function App() {
  const personName={
    first:'Bruce',
    last:'Wayne',
  }
  const nameList=[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Diana',
      last:''
    },
  ]
  return (
    <div className="App">
        <Greet name='Berat' isLoggedIn={false}/>
        <Person name={personName}/>
        <PersonList names={nameList}/>
        <Status status='success'/>
        <Oscar>
          <Heading>Oscar Goes to </Heading>
        </Oscar>
    </div>
  );
}

export default App;
