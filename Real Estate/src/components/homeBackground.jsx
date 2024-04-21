import React from "react";

const HomeBackground = () => {
  return (
    <div className="containerHome">
      <div className="Nav">
        <header className="header">
          <a className="logo" id="logo" href="#">
            Real Estate.
          </a>

          <nav className="head-nav">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/houses">Houses</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <div>
          <p className="main-text1">
            The real estate experience <br></br> that you deserve.
          </p>
          <p className="main-text2">Inspired by you, supported by us!</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBackground;
