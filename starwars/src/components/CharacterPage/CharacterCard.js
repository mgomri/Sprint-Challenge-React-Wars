import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';





const CharacterCard =({char}) => {

return (
  <div className="character-card">
      <Card>
      
      <CardBody>
        <CardTitle>{char.name}</CardTitle>
        <CardSubtitle>{char.gender}</CardSubtitle>
        <CardText>{char.birth_year}</CardText>
        
        
      </CardBody>
    </Card>

  </div>
)






}

export default CharacterCard;