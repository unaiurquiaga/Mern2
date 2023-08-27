import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NotFound = ({ tabletOrLess }) => {
  return (
    <>
      <article className="NotFound-container">
        <h4>{`Sorry!\nPage not found.`}</h4>
        <button>
          <NavLink to="/">Go back! 🌤️</NavLink>
        </button>
      </article>
    </>
  );
};

export default NotFound;