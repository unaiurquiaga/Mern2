import React, { useContext, useState, useEffect } from "react";
import Weather from "../components/Weather";
import { ApiContext } from "../context/ApiContext";
import useApi from "../hooks/useApi";

const Home = () => {
  const { apiInfo } = useContext(ApiContext);
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <div className="app" style={tabletOrLess ? { background: "yourBackgroundValueHere" } : {}}>

      <Weather tabletOrLess={tabletOrLess} />
    </div>
  );
};

export default Home;