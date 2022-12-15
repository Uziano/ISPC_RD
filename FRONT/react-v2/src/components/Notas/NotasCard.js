import React from 'react';
//Este es la tarjeta NOTA 
// import notas from '../../data/notasMock'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NotasCard({title, description}) {
  // console.log(props)
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Hacer tarea</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
export default NotasCard;