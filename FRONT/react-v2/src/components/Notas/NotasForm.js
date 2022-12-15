import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as notasServer from "../../server/notasServer";

//Toma los datos de los campos para crear la nota
export default function NotasForm() {
  //Manejar estados del form con useState y useEffect
  // para enviar la info al back y crear otra nota

  //1am QUEDA VER QUE TOME LOS DATOS DEL STATE CORRECTO
  //PARA PODER HACER UN POST
  
  const initialState = {
    user: "",
    title: "",
    description: "",
    current_state: "1",
    deadline: "10-10-2025",
  };

  const [note, setNote] = useState(initialState);

  const handleInputChange = (e) => {
    //  console.log(e);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setNote({ ...note, [e.target.title]: e.target.description });
    console.log(note);
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Nueva Nota</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              {/* Título */}
              <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleInputChange}>
                <Form.Label>Titulo de la nota</Form.Label>
                <Form.Control type="email" placeholder="Pasear a mi gato 🐈" />
                <Form.Text className="text-muted">
                  Tip: Usa un nombre claro para cada nota
                </Form.Text>
              </Form.Group>

              {/* Descripción */}
              <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleInputChange}>
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Hoy se portó bien el nene 🐈"
                />
                <Form.Text className="text-muted">
                  Tip: Se conciso para una mayor claridad al leerla
                </Form.Text>
              </Form.Group>

              {/* Fecha - Standby*/}
              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fechas</Form.Label>
                <Form.Control type="email" placeholder="Pasear a mi gato 🐈" />
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Incluir fecha de hoy"
                />
              </Form.Group> */}
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Cancelar</Button>
            <Button variant="primary">Guardar 📚</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}
