import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { NavBar } from './components/navbar'
import { Item } from './components/item'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar/>

      <Item initial="0" stock="5"/>
    </div>
  );
}

export default App;
