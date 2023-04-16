import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";


import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <Auth0Provider
    domain="dev-ha5hzapiitckc6mw.us.auth0.com"
    clientId="Amw1zjtMbx07UcKbhQKk53Gv18uK8ZKV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </Provider>
  </BrowserRouter>
);



// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-ha5hzapiitckc6mw.us.auth0.com"
//     clientId="Amw1zjtMbx07UcKbhQKk53Gv18uK8ZKV"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );
