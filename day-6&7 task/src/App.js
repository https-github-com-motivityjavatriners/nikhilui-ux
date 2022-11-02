import './App.css';
import Counter from './Counter';
import ComponentC from './ComponentC';
import {UserProvider} from './UserContext'

function App() {
  return (
    <div className="App">
      <Counter/>
      <UserProvider value="nikhil">
      <ComponentC/>
      </UserProvider>
    </div>
  );
}

export default App;
