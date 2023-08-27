import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../../src/context/ApiContext";
import { ApiFiveContext } from "../../src/context/ApiFiveContext";
import { SelectContext } from "../../src/context/SelectContext";
import { citiesCoords } from "../components/Select/InfoSelect";

const useApi = () => {
  const { apiInfo, setApiInfo } = useContext(ApiContext);
  const { apiFiveDays, setApiFiveDays } = useContext(ApiFiveContext);
  const { selectValue, setSelectValue } = useContext(SelectContext);
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (selectValue) {
      const { latitude, longitude } = citiesCoords[selectValue];
      setLatitude(latitude);
      setLongitude(longitude);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          alert(
            `Ubicación desactivada!\nActívalo para continuar.`
          );
        }
      );
    }
  }, [selectValue]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const API_KEY = "fc23e09087d6e554315c9dca52e5bf4e";
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;
      const API_URL_fiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;
      const fetchApiData = async () => {
        try {
          setLoading(true);
          const [response, responseFive] = await Promise.all([
            axios.get(API_URL),
            axios.get(API_URL_fiveDays),
          ]);
          const newApiFiveDays = (responseFive.data).list.filter((element, index) => {
            return [index + 8] % 8 === 0;
          })
          setApiInfo(response.data);
          setApiFiveDays(newApiFiveDays);
          setLoading(false);
        } catch (error) {
          alert(`❗ Ha ocurrido un error con la información.\nPrueba de nuevo o  más tarde! 😊`);
          console.log("Error al llamar a la API:", error);
          setLoading(false);
        }
      };
      fetchApiData();
    }
  }, [latitude, longitude, selectValue, setApiInfo, setApiFiveDays]);
  return { loading };
};

export default useApi;