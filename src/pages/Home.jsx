import React, { useContext, useState, useEffect } from "react";
import Weather from "../components/Weather";
import { ApiContext } from "../context/ApiContext";
import UseApi from "../hooks/UseApi";

const Home = () => {
  const { apiInfo } = useContext(ApiContext);
  const [tabletOrLess, setTabletOrLess] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setTabletOrLess(true);
    }
  }, []);
  return (
    <div className="app" style={tabletOrLess}>
      <Weather tabletOrLess={tabletOrLess} />
    </div>
  );
};

export default Home;