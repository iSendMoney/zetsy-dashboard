/* eslint-disable react/prop-types */
import React from "react";
import UserReducer from "../Reducer/UserReducer";

const initialState = {
  user: null,
};

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(UserReducer, initialState);
  console.log(state);
  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
