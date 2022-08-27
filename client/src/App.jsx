import Home from "./pages/Home";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";

import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";
import Success from "./pages/Success";



const App = () => {
  const user = false
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/success" element={<Success />} />
        <Route path="/orders" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );

};

export default App;
