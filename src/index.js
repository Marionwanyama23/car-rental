import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

const sucessfulLookup = (position) =>{
  const {lattitude ,longitude}= position.coords;
  const self= this;
  fetch ('https://api.opencagedata.com/geocode/v1/json?q=${lattitude}+{longitude}&key=0e4d7d46374b4894a7d31af02107372d')
  .then (response = response.json())
  .then (console.log);
};