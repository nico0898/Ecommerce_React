import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import { NavBar } from './components/navbar';
import { ItemListContainer } from './components/itemListContainer';
import  ItemDetailContainer from './components/itemDetailContainer'

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>

        <Switch>

          <Route exact path='/'>
            Hola
          </Route>

          <Route path='/category/:categoryId'>
              <ItemListContainer />
          </Route>

          {/* <Route path='/item/:itemId/:otroId' > */}
          <Route path='/item/:itemId' >
              <ItemDetailContainer />
          </Route>

          {/* <Route path='*' >
            404
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
