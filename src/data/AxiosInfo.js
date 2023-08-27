export const datosHome = {
  descripción: response.weather[0].description,
  temperatura: response.main.temp,
  sensación_térmica: response.main.feels_like,
  mínimas: response.main.temp_min,
  máximas: response.main.temp_max,
  humedad: response.main.humidity,
  viento: response.wind.speed,
  localización: response.name,
  condiciones: response.weather[0].icon,
};
export const datosCinco = [
  {
    descripción: response.list[0].weather[0].description,
    condiciones: response.list[0].weather[0].icon,
    mínimas: response.list[6].main.temp_min,
    máximas: response.list[3].main.temp_max,
    fecha: response.list[0].dt_txt.toLocaleString().slice(0, 5),
  },
  {
    descripción: response.list[7].weather[0].description,
    condiciones: response.list[7].weather[0].icon,
    mínimas: response.list[6].main.temp_min,
    máximas: response.list[10].main.temp_max,
    fecha: response.list[7].dt_txt.toLocaleString().slice(0, 5),
  },
  {
    descripción: response.list[14].weather[0].description,
    condiciones: response.list[14].weather[0].icon,
    mínimas: response.list[14].main.temp_min,
    máximas: response.list[18].main.temp_max,
    fecha: response.list[14].dt_txt.toLocaleString().slice(0, 5),
  },
  {
    descripción: response.list[22].weather[0].description,
    condiciones: response.list[22].weather[0].icon,
    mínimas: response.list[22].main.temp_min,
    máximas: response.list[26].main.temp_max,
    fecha: response.list[22].dt_txt.toLocaleString().slice(0, 5),
  },
  {
    descripción: response.list[31].weather[0].description,
    condiciones: response.list[31].weather[0].icon,
    mínimas: response.list[31].main.temp_min,
    máximas: response.list[34].main.temp_max,
    fecha: response.list[31].dt_txt.toLocaleString().slice(0, 5),
  },
];
let date = "2023-07-26 09:00:00";
let texto = date.slice(5, 10);
function format(date) {
  return fecha.replace(/^(\d{2})-(\d{2})$/g, '$2/$1');
}