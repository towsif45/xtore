import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} persistor={persistor} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
