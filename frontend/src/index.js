import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../src/modules/store";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
