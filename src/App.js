import 'bootstrap/dist/css/bootstrap.min.css'

import "./App.css";
import { NavBar } from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext"
import { Cart } from './components/cart';
import { FormOrder } from './components/formOrder';


function App() {
  return (
    
    <CartProvider>
    <BrowserRouter >
      <div className="App">
      <NavBar />
        <Switch >
          <Route exact path='/'>
            Hola
          </Route>

          <Route path='/productos'>
              <ItemListContainer />
          </Route>

          <Route path='/item/:itemId' >
              <ItemDetailContainer />
          </Route>

          <Route path="/cart">
              <Cart />
          </Route>

          <Route path="/orders">
              <FormOrder />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
