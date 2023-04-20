import React from "react";

import {
    UtilityReducer,
    initialUtilityState,
} from "./UtilityReducer";

const UtilityContext = React.createContext();

export const UtilityProvider = ({ children }) => {
  const [utilityData, dispatchUtilityData] = React.useReducer(
    UtilityReducer,
    initialUtilityState
  );

  return (
    <UtilityContext.Provider
      value={[utilityData, dispatchUtilityData]}
    >
      {children}
    </UtilityContext.Provider>
  );
};

export const useUtilityContext = () => React.useContext(UtilityContext);
