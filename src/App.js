// import logo from './logo.svg';
import './App.css';
import GridDisplay from './components/GridDisplay';
import { LogOrSign } from './components/LogOrSign';
import { useState} from "react";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>{ user ? user : "Landing page" }</h1>
      <LogOrSign setter={setUser} />
      <GridDisplay />
    </div>
  );
}

export default App;
