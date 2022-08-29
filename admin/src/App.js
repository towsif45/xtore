import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import AppBody from "./pages/AppBody";
import Transaction from "./pages/Transaction";
import Order from "./pages/Order";

function App() {
  let admin = null;
  if (localStorage.getItem("persist:root") !== null) {
    if (JSON.parse(localStorage.getItem("persist:root")).user !== null) {
      if (
        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser !== null
      ) {
        admin = JSON.parse(
          JSON.parse(localStorage.getItem("persist:root")).user
        ).currentUser.accessToken;
      }
    }
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            {admin ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path="/">
            {admin ? (
              <AppBody component={<Home />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/users">
            {admin ? (
              <AppBody component={<UserList />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/user/:userId">
            {admin ? (
              <AppBody component={<User />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/newUser">
            {admin ? (
              <AppBody component={<NewUser />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/products">
            {admin ? (
              <AppBody component={<ProductList />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/product/:productId">
            {admin ? (
              <AppBody component={<Product />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/newproduct">
            {admin ? (
              <AppBody component={<NewProduct />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/transactions">
            {admin ? (
              <AppBody component={<Transaction />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/orders">
            {admin ? (
              <AppBody component={<Order />} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
