import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { createRoot } from "react-dom/client"; 

const el = document.getElementById("app");
const root = createRoot(el);
root.render(<App tab="home" />);

