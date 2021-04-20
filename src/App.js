import 'bootstrap/dist/css/bootstrap.min.css'

import "./App.css";
import { NavBar } from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext"
import { Cart } from './components/cart';


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

          <Route  path='/category/:categoryId'>
              <ItemListContainer />
          </Route>


          <Route path='/item/:itemId' >
              <ItemDetailContainer />
          </Route>

          <Route path="/cart">
              <h2>Estoy en el Cart</h2>
              <Cart />
            </Route>

        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
