import React from "react";
import { Card } from "react-bootstrap";
import "./Course.css";

export const CoursesItem = ({ item }) => {
  return (
    <div className="content-img-card">
      <Card>
        <Card.Img className="content-image" variant="top" src={item.img} />
      </Card>
      <p>{item.para}</p>
    </div>
  );
};
