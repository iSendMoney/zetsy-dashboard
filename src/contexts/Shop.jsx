import React from "react";

import {
    initialShopState,
    ShopReducer,
} from "./ShopReducer";

const ShopContext = React.createContext();

export const ShopProvider = ({ children }) => {
  const [shopData, dispatchShopData] = React.useReducer(
    ShopReducer,
    initialShopState
  );

  return (
    <ShopContext.Provider
      value={[shopData, dispatchShopData]}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => React.useContext(ShopContext);
