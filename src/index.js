import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-mvmdya1ccelpt4nm.us.auth0.com"
    clientId="rJ6Hr7OolvgwlEBC3uVedMY0uOKETXsI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
