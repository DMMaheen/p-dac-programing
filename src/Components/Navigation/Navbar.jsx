import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section>
      <nav>
        <input type="checkbox" id="check" className="checkbtn" />
        <label htmlFor="check">
          <i class="fas fa-comment"></i>
        </label>
        <label className="logo">PickUpBiz</label>

        <ul>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
