import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import Menu from "./components/Menu";
import TopBar from "./components/TopBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      
      </Routes>
    </BrowserRouter>

    {/* <Menu/> */}
    {/* <TopBar/> */}
  </React.StrictMode>
);

