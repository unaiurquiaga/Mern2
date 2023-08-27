import React, { useContext } from "react";
import { ApiFiveContext } from "../context/ApiFiveContext";

const WeatherFive = () => {
  const { apiFiveDays } = useContext(ApiFiveContext);
  console.log(apiFiveDays);
  return (
    <>
      <div className="five-weather">
        {apiFiveDays.map((day) => {
          const date = day.dt_txt;
          const dateShorten = date.slice(5, 10);
          const finalDate = dateShorten.replace(/^(\d{2})-(\d{2})$/g, "$2/$1");

          return (
            <div key={day.dt_txt} className="each-day-weather">
              <p>{finalDate}</p>
              <div className="container">
                <img
                  src={`./assets/icons/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
                <div className="temp-cont">
                  <div className="temp">
                    <p>{Math.round(day.main.temp_max)}</p>
                  </div>
                  <div className="temp">
                    <p>{Math.round(day.main.temp_min)}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeatherFive;