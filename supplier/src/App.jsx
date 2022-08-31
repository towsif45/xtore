import LogIn from "./pages/LogIn";
import AllOrders from "./pages/AllOrders";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBody from "./pages/AppBody";
import "./App.css";
import DeliveredOrders from "./pages/DeliveredOrders";
import Transaction from "./pages/Transaction";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <AppBody component={<AllOrders />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LogIn />}
          />
          <Route
            path="/delivered"
            element={
              user ? (
                <AppBody component={<DeliveredOrders />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/transactions"
            element={
              user ? (
                <AppBody component={<Transaction />} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
