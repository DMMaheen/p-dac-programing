import React from "react";
import { Data } from "../../Service/Data";
import "./ServiceItm.css";
import { ModulesItem } from "./ModulesItem";

const Modules = () => {
  return (
    <div className="service-main">
      <div className="padding"></div>
      <div className="ser-our">
        <p>Our Modules</p>
      </div>
      <div>
        {Data.map((item) => (
          <ModulesItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Modules;
