import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import './card2.css';

  const card2 = (props) => {
    return (
      <div>
        <Card className="card2">
        <CardImg className="style2" top width="100%" src="/assets/sonGoku.jpg" alt="Card image cap"/> 
          <CardBody class="card2">
            <CardTitle className="card2"  tag="h5">Son Goku</CardTitle>
            <CardText>Son Goku, mais conhecido apenas como Goku, cujo nome verdadeiro é Kakarotto, é o protagonista da franquia Dragon Ball, criada por Akira Toriyama. </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default card2;