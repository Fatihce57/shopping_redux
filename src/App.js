import './App.css';
import { Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";


function App(props) {
  return (
    <div className="App">
      <h1>
        Book Shopping Cart
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default (App);
