import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./react-redux";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
} else {
  console.error("Root element not found");
}
