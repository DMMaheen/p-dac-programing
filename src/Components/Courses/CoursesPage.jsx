import React from "react";
import "./Course.css";
//import { DataImg } from "../../Service/DataImg";

import { CoursesItem } from "./CoursesItem";
import { DataImgForCourse } from "../../Service/DataImgForCourse";

const CoursesPage = () => {
  return (
    <div>
      {/* {
        <div content-image>
          {<img src="https://wallpaperaccess.com/full/4142231.jpg" alt="" />}
        </div>
      } */}
      <div className="content-Heading">
        <marquee>
          Welcome To PDAC-Professional Developement Advanced Computing Course
        </marquee>
      </div>

      <div className="Content-cardd-Id">
        {DataImgForCourse.map((item) => (
          <CoursesItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
