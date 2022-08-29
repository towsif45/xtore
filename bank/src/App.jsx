import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Transactions from "./pages/Transactions";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
        <Route path="/transactions" element={user ? <Transactions /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
