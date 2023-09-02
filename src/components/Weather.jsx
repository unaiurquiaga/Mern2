import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { utcToZonedTime } from "date-fns-tz";

const Weather = ({ tabletOrLess }) => {
  const { apiInfo } = useContext(ApiContext);
  const sunriseUtcTime = apiInfo?.sys?.sunrise;
  const sunsetUtcTime = apiInfo?.sys?.sunset;

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const sunriseLocalDate = utcToZonedTime(
    new Date(sunriseUtcTime * 1000),
    timeZone
  );
  const sunsetLocalDate = utcToZonedTime(
    new Date(sunsetUtcTime * 1000),
    timeZone
  );
  const sunriseHours = sunriseLocalDate.getHours();
  const sunriseMinutes = sunriseLocalDate.getMinutes();
  const sunriseSeconds = sunriseLocalDate.getSeconds();

  const sunsetHours = sunsetLocalDate.getHours();
  const sunsetMinutes = sunsetLocalDate.getMinutes();
  const sunsetSeconds = sunsetLocalDate.getSeconds();

  return (
    <>
      {tabletOrLess ? (
        <article>
          <div className="main-weather">
            <h3>{apiInfo.name}</h3>
            <p>{apiInfo.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/w/${apiInfo.weather[0].icon}.png`}
              alt="icono tiempo"
            />
            <p>{Math.round(apiInfo.main.temp)} °C</p>
            <div className="temp-container">
              <div className="temp">
                <p>{Math.round(apiInfo.main.temp_max)} °C</p>
              </div>
              <span>/</span>
              <div className="temp">
                <p>{Math.round(apiInfo.main.temp_min)} °C</p>
              </div>
            </div>
          </div>
        </article>
      ) : (
        <article>
          <div className="main-conditions">
            <p>
              Sensación térmica: {Math.round(apiInfo.main.feels_like)} °C
            </p>
            <p>
              Visibilidad: {apiInfo.visibility}
            </p>
            <p>
              Humedad: {apiInfo.main.humidity}%
            </p>
          </div>
          <div className="main-weather">
            <h3>{apiInfo.name}</h3>
            <p>{apiInfo.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/w/${apiInfo.weather[0].icon}.png`}
              alt="icono tiempo"
            />
            <p>{Math.round(apiInfo.main.temp)} °C</p>
            <div className="temp-container">
              <div className="temp">
                <p>{Math.round(apiInfo.main.temp_max)} °C</p>
              </div>
              <span>/</span>
              <div className="temp">
                <p>{Math.round(apiInfo.main.temp_min)} °C</p>
              </div>
            </div>
          </div>
          <div className="main-conditions">
            <p>
              Viento: {apiInfo.wind.speed} km/h
            </p>
            <p>
              Amanecer: {sunriseHours}:{sunriseMinutes}:{sunriseSeconds}
            </p>
            <p>
              Atardecer: {sunsetHours}:{sunsetMinutes}:{sunsetSeconds}
            </p>
          </div>
        </article>
      )}
    </>
  );
};

export default Weather;