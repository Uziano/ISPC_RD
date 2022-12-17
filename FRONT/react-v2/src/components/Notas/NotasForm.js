import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Select from "react-select"

const options_current_state = [
  { value: "1", label: "Por hacer" },
  { value: "2", label: "En proceso" },
  { value: "3", label: "Finalizado" },
];

//Toma los datos de los campos para crear la nota
export default function NotasForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [current_state, setSelecteCurrentState] = useState("");
  const [user, setUser] = useState("");
  const [deadline, setDeadline] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/notas/notas-list/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          title: title,
          description: description,
          current_state: current_state,
          user: user,
          deadline: deadline,
        }),
      });

      let resJson = await res.json();
      if (res.status === 201) {
        setTitle("");
        setDescription("");
        setSelecteCurrentState("");
        setUser("");
        setDeadline("");
        setMessage("Nota Creada - Recargue la pagina");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handelSelectCurrentState = ({value}) => {console.log(value); setSelecteCurrentState(value);} 
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Nueva Nota</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* Título */}
            <Form.Group className="mb-3" controlId="formTitulo">
              <Form.Label>Titulo de la nota</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="Pasear a mi gato 🐈"
              />
              <Form.Text className="text-muted">
                Tip: Usa un nombre claro para cada nota
              </Form.Text>
            </Form.Group>

            {/* Descripción */}
            <Form.Group className="mb-3" controlId="formDesc">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
                placeholder="Hoy se portó bien el nene 🐈"
              />
              <Form.Text className="text-muted">
                Tip: Se conciso para una mayor claridad al leerla
              </Form.Text>
            </Form.Group>

            {/* Current State*/}
            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Select
                defaultValue={{label:'Seleccione una opción',value:current_state}}
                id="current_state"
                name="current_state"
                className="form-control"
                onChange={handelSelectCurrentState}
                classNamePrefix="my-react-select"
                options={options_current_state}
              />
            </Form.Group>

            {/* Numero de Usuario - Este lo toma solo dsp*/}
            <Form.Group className="mb-3" controlId="formUser">
              <Form.Label>Usuario ID</Form.Label>
              <Form.Control
                onChange={(e) => setUser(e.target.value)}
                type="number"
                value={user}
                placeholder="Esto lo lee solo despues"
              />
            </Form.Group>

            {/* DeadLine*/}
            <Form.Group className="mb-3" controlId="formDeadline">
              <Form.Label>Fecha Final finalezca</Form.Label>
              <Form.Control
                onChange={(e) => setDeadline(e.target.value)}
                type="date"
                value={deadline}
                placeholder="Hoy se portó bien el nene 🐈"
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Cancelar</Button>
            <Button type="submit" variant="primary">
              Guardar 📚
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </div>
    </form>
  );
}

