import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
function NavBar() {
  return (
    <nav id="nav" class="navbar navbar-expand-sm navbar-dark sticky-top">
      <a class="navbar-brand" href="http://localhost:3000/">ISFCD</a>
      <ul className="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Car</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Incentive</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Customers</a>
        </li>
        <li class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Booking
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/Booking/addnew">Add New Booking</a>
            <a class="dropdown-item" href="/Booking/all">Check All Booking</a>           
          </div>
        </li>
        <button class="btn btn-dark btn-floating btn-sm" type="button">Logout</button>
      </ul>
    </nav>
  );
}
export default NavBar;