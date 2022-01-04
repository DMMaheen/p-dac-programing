import React from "react";
import "./Placement.css";
import { Card } from "react-bootstrap";

export const Placementchild = ({ item }) => {
  return (
    <div>
      <Card style={{ width: "16rem", backgroundColor: "rgba(10,10,10,0.1)" }}>
        <Card.Img
          variant="top"
          style={{ width: "200px", marginLeft: "30px", marginTop: "20px" }}
          src={item.img}
        />
        <Card.Body>
          <Card.Title>{item.Name}</Card.Title>
          <Card.Text>{item.Passoutyear}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
