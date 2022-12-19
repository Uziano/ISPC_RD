import React from "react";
import NotasForm from "../Notas/NotasForm";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="bg-warning">
      <NavBar />
      <NotasForm />
      <Footer />
    </div>
  );
}

export default Home;
