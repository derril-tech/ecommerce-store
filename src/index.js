import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./redux/store"; // Import Redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Remove <React.StrictMode> if you suspect it causes duplicate rendering
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
