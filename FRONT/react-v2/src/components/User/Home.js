import React from "react";
import NotasView from "../Notas/NotasView";
import NotasForm from "../Notas/NotasForm";
import NavBar from "../Navbar/NavBar";

function Home() {
  return (
    <div className="bg-warning">
      <NavBar />
      <NotasForm />
    </div>
  );
}

export default Home;
