import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductExpanded from "./pages/ProductExpanded";
import CheckOut from "./pages/CheckOut";
import Pay from "./pages/Pay";
import ErrorPage from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/expanded" element={<ProductExpanded />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout-pay" element={<Pay />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
