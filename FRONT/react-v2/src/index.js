import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//React Routas
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Componentes
import Login from "./components/User/Login";
import LoginRegistro from "./components/User/LoginRegistro";
import Inicio from "./components/AboutUs/Inicio";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from './components/User/Home'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      {/* Lo que pongamos aca va para todas las rutas */}
      {/* <NavBar /> */}
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registrarse" element={<LoginRegistro />} />
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

reportWebVitals();
