import React from "react";
import "./Placement.css";
import { Placedata } from "../../Service/Placedata";
import { Placementchild } from "./Placementchild";

export const Placement = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Achievements</h1>
      </div>
      <div className="content-placement">
        {Placedata.map((item) => (
          <Placementchild item={item} />
        ))}
      </div>
    </div>
  );
};
