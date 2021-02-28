import React from "react";
import ReactDOM from "react-dom";
import IPTracker from "./IPTracker";
import reportWebVitals from "./reportWebVitals";
import "./assets/sass/IPTracker.scss";

ReactDOM.render(
  <React.StrictMode>
    <IPTracker />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
