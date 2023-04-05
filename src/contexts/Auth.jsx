import React from "react";

import {
  initialAuthenticationState,
  MarketplaceReducer,
} from "./MarketplaceReducer";

const MarketplaceContext = React.createContext();

export const AuthenticationReducer = ({ children }) => {
  const [marketplaceData, dispatchMarketplaceData] = React.useReducer(
    MarketplaceReducer,
    initialMarketplaceState
  );

  return (
    <MarketplaceContext.Provider
      value={[marketplaceData, dispatchMarketplaceData]}
    >
      {children}
    </MarketplaceContext.Provider>
  );
};

export const useMarketplaceContext = () => React.useContext(MarketplaceContext);