import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // makes the store available to every component
import store from "./store";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
