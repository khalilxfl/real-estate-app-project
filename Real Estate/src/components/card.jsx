import React from "react";
import { Link } from "react-router-dom";
import more from "./more.png";

const Card = ({ id, pic, cost, details, location }) => {
  return (
    <div className="card">
      <Link to={"/houses/" + id}>
        <img src={pic} alt="House" className="house-pic" />
      </Link>

      <h2>{cost}</h2>
      <h4>Details: {details}</h4>
      <h4>Location: {location}</h4>
    </div>
  );
};

export default Card;
