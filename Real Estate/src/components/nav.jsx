import React from "react";

const Nav = () => {
  return (
    <div className="Nav">
      <header className="header">
        <a className="logo" id="logo" href="#">
          Real Estate.
        </a>

        <nav className="sub-nav">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/houses">Houses</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
