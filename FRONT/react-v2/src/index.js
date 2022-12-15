import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//React Routas
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/User/Login'
import LoginRegistro from "./components/User/LoginRegistro";
// import NavBar from "./components/Navbar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* Lo que pongamos aca va para todas las rutas */}
      {/* <NavBar /> */}
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/registrarse" element={<LoginRegistro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

reportWebVitals();
