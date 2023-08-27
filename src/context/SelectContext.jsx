import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { citiesCoords } from "../components/Select/InfoSelect";
import { ApiFiveContext } from "./ApiFiveContext";
import { ApiContext } from "./ApiContext";

export const SelectContext = createContext({
  selectValue: "",
  setSelectValue: () => null
});

export const SelectContextProvider = ({ children }) => {
  const [selectValue, setSelectValue] = useState(null);

  return (
    <SelectContext.Provider value={{ selectValue, setSelectValue }}>
      {children}
    </SelectContext.Provider>
  );
};
