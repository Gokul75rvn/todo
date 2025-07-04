import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="113349961949-bdp0dl6bajurvpclu26ihqbot5hsq7dv.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
