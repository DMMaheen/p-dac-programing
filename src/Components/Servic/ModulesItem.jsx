import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";

export const ModulesItem = ({ item }) => {
  return (
    <div className="Card-main">
      <Card className="Card-name">
        <Card.Img
          className="card-img"
          variant="top"
          src={item.img}
          height="50px"
        />
        <Card.Body>
          <Card.Title className="card-title">{item.title}</Card.Title>
          <Card.Text id="card-para">{item.parag}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
