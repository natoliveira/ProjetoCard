import React from 'react';
import {
  Card, CardImg,CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card5.css';

const Card5 = (props) => {
  return (
    <div>
      <Card className="card5">
        <CardBody >
          <CardImg top width="100%" className="style5" src="/assets/Vegeta.png" alt="Card image cap"/> 
          <CardTitle className="card5" tag="h5">Vegeta</CardTitle>
          <CardText>Vegeta ou Príncipe Vegeta é o príncipe da raça Saiyajin e arqui-rival de Goku. Ele é o filho mais velho de Rei Vegeta, o irmão mais velho de Tarble, o marido de Bulma, o pai de Trunks e Bra, e tataravô de Vegeta Jr.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card5;