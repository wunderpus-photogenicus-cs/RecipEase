import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";

const el = document.getElementById("app");
const root = createRoot(el);
root.render(<App tab="home" />);

