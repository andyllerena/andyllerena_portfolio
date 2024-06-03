import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import App from './App';
import './index.css';

render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
