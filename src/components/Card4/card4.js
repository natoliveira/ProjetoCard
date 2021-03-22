import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card4.css';

const Card4 = (props) => {
  return (
    <div>
      <Card className="card4">
        <CardBody>
          <CardImg top width="100%" className="style4" src="assets/IzukuMidoriya.jpeg" alt="Card image cap"/> 
          <CardTitle className="card4" tag="h5">Izuku Midoriya</CardTitle>
          <CardText>Também conhecido como Deku, é o principal protagonista da série de mangá e anime My Hero Academia.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card4;