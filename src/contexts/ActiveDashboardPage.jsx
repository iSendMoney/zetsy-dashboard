import React from "react";

const activeDashboardContext = React.createContext();

export const ActiveDashboardProvider = ({ children }) => {
  const [activeDashboard, setActiveDashboard] = React.useState('home');

  return (
    <activeDashboardContext.Provider
      value={[activeDashboard, setActiveDashboard]}
    >
      {children}
    </activeDashboardContext.Provider>
  );
};

export const useActiveDashboard = () => {
  const [activeDashboard, setActiveDashboard] = React.useContext(
    activeDashboardContext
  );

  return [activeDashboard, setActiveDashboard];
};
