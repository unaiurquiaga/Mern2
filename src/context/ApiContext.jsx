import React, { createContext, useState } from 'react'
import { initialResponse } from "../data/ResponseMock"

export const ApiContext = createContext({ apiInfo: {}, setApiInfo: () => { } });

export const ApiContextProvider = ({ children }) => {
  const [apiInfo, setApiInfo] = useState(initialResponse)
  return (
    <ApiContext.Provider value={{ apiInfo, setApiInfo }}>
      {children}
    </ApiContext.Provider>
  )
}

