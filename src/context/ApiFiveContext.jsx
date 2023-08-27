import React, { useState, createContext } from "react";
import { fiveDaysResponse } from "../data/ResponseMock";

export const ApiFiveContext = createContext({
  apiFiveDays: {},
  setApiFiveDays: () => { },
});

export const ApiFiveContextProvider = ({ children }) => {
  const [apiFiveDays, setApiFiveDays] = useState({});

  return (
    <ApiFiveContext.Provider value={{ apiFiveDays, setApiFiveDays }}>
      {children}
    </ApiFiveContext.Provider>
  );
};