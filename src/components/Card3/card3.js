import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card3.css';


const Card3 = (props) => {
  return (
    <div className="card3">
      <Card className="card3">
          <CardBody>
          <CardImg top width="100%" className="style3" src="/assets/SasukeUchina.jpg" alt="Card image cap"/> 
          <CardTitle className="card3" tag="h5">Sasuke Uchiha</CardTitle>
          <CardText>É um dos últimos membros sobreviventes do clã Uchiha de Konohagakure, além de ser a reencarnação atual de Indra.</CardText>
          <Button className="card3">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card3;