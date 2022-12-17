//Este es la tarjeta NOTA 
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NotasCard({title, description}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
export default NotasCard;