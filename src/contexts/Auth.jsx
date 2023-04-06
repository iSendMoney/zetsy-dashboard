import React from "react";

import {
  initialAuthenticationState,
  AuthenticationReducer,
} from "./AuthReducer";

const AuthContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticationData, dispatchAuthenticationData] = React.useReducer(
    AuthenticationReducer,
    initialAuthenticationState
  );

  return (
    <AuthContext.Provider
      value={[authenticationData, dispatchAuthenticationData]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
