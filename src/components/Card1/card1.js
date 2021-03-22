import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card1.css';

    const Card1 = (props) => {
    return (
        <div>
        <Card className="card1">
            <CardImg className="style1" src="./assets/Naruto_Uzumaki.png" alt="Card image cap"/> 
            <CardBody class="card1">
            <CardTitle tag="h5" className="card1">Naruto Uzumaki</CardTitle>
            <CardText>Naruto Uzumaki é um shinobi de Konohagakure, também sendo a reencarnação atual de Asura e o protagonista homônimo da franquia Naruto.</CardText>
            <Button className="btn-1">Button</Button>
            </CardBody>
        </Card>
        </div>
    );
    };

    export default Card1;