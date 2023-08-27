import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiContextProvider } from "./context/ApiContext.jsx";
import { ApiFiveContextProvider } from "./context/ApiFiveContext.jsx";
import { SelectContextProvider } from "./context/SelectContext.jsx";
import WeatherFive from "./components/WeatherFive.jsx"
import NotFound from "./pages/404.jsx";
import Home from "./pages/Home.jsx";
import Cities from "./pages/Cities.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectContextProvider>
      <ApiContextProvider>
        <ApiFiveContextProvider>
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/NextDays" element={<WeatherFive />} />
                <Route path="/Cities" element={<Cities />} />
                <Route path="/CitiesNextDays" element={<WeatherFive />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ApiFiveContextProvider>
      </ApiContextProvider>
    </SelectContextProvider>
  </React.StrictMode>
);