//Este es la tarjeta NOTA
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import * as notasServer from '../../server/notasServer'


function NotasCard({ id_nota, title, description, deadline, beginning, current_state }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    await notasServer.DeleteNota(id_nota);
    handleClose()
    alert("Recargue la página")
  };   

  return (
    <div>
      {/* COMPONENT NOTA */}
        <Card
          bg={"Dark".toLowerCase()}
          key={"Dark"}
          text={"Light".toLowerCase()}
          style={{ width: "18rem", borderRadius:"20px"}}
          className="mb-2"
        >
          <Card.Header>Para el: {deadline}</Card.Header>
          <Card.Body>
            <Card.Title>{title}, {id_nota}</Card.Title>
            <Card.Text>{description}</Card.Text>
          <button className="btn123" onClick={handleShow}>
              Detalles
            </button>
          </Card.Body>
        </Card>
      {/* FIN COMPONENT NOTA */}

      {/* MODAL DETALLES NOTAS */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Body>{current_state}</Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button variant="primary">Ta bien</Button>
        </Modal.Footer>
      </Modal>
      {/* FIN DEL DETALLES NOTAS */}
    </div>
  );
}

export default NotasCard;
