import React, { useEffect, useState, useContext } from "react";
import Weather from "../components/Weather";
import { ApiContext } from "../context/ApiContext";
import Select from "../components/Select/Select";
import { NavLink } from "react-router-dom";

const Cities = () => {
  const { apiInfo } = useContext(ApiContext);
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <div className="app" style={{ tabletOrLess }}>
      <Select />
      <Weather tabletOrLess={tabletOrLess} />
      <button><NavLink to="/NextDays">Próximos días</NavLink></button>
    </div>
  );
};

export default Cities;