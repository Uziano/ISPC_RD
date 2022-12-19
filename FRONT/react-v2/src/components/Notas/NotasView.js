import React, { useEffect } from "react";
import { useState } from "react";
import NotasCard from "./NotasCard";
import * as notasServer from "../../server/notasServer";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function NotasView() {
  const [notas, setNotas] = useState([]);

  const ListNotes = async () => {
    try {
      const res = await notasServer.listNotes();
      const data = await res.json();
      setNotas(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    ListNotes();
  }, []);

  //Para mostrar por consola y controlar:
  // console.table(notas);
  
  if (notas.length === 0) {
    return (
      <div className="bg-warning">
        <NavBar />
        <h1>Ups, no tiene notas creadas...</h1>;
      </div>
    )
  } else {
    return (
      <div className="bg-warning">
        <NavBar />
        <Row xs={1} md={2} className="g-8 p-4">
          {Array.from(notas).map((notas) => (
            <Col>
              <NotasCard
                id_nota={notas.id}
                title={notas.title}
                description={notas.description}
                deadline={notas.deadline}
                beginning={notas.beginning}
                current_state={notas.current_state}
              />
            </Col>
          ))}
        </Row>
        <Footer />
      </div>
    );
  }
}
