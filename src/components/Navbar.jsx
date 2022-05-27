import React from "react";
import logo from "../components/img/nav_img.png";

export default function Navbar(params) {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src={logo} width="40" height="50" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
        About
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://github.com/roshanpatil2000">
          Github
          </a>
          <a class="navbar-item"  href="https://www.hackerrank.com/roshanrpatil1">
            Hacker Rank
          </a>
          <a class="navbar-item" href = "https://www.facebook.com/profile.php?id=100010276354846">
          Facebook
          </a>
        </div>
        </div>
        </div>
        </div>


      
    </nav>
  );
}
