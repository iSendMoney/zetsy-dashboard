import { Button } from "@mui/material";
import React from "react";
import { Text } from "@tremor/react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useActiveDashboard } from "../../contexts/ActiveDashboardPage";
import SidebarItems from "../../utils/Sidebar.json";
import "./styles/style.css";

export default function Sidebar() {
  const [activeDashboard, setActiveDashboard] = useActiveDashboard();

  const handleActiveDashboard = (dashboard) => {
    setActiveDashboard(dashboard);
  };

  return (
    <div className="pt-3 desktopLayoutSidebar__container flex flex-col align-start">
      <div className="max-w-sm mx-auto space-y-6 mb-1">
        <SearchSelect>
          <SearchSelectItem value="1">Kilometers</SearchSelectItem>
          <SearchSelectItem value="2">Meters</SearchSelectItem>
          <SearchSelectItem value="3">Miles</SearchSelectItem>
          <SearchSelectItem value="4">Nautical Miles</SearchSelectItem>
        </SearchSelect>
      </div>
      {SidebarItems.map((item, index) => (
        <Button
          key={index}
          className={activeDashboard === item.actionName && "active"}
          onClick={() => handleActiveDashboard(item.actionName)}
        >
          <i className={item.icon}></i> <Text>{item.name}</Text>
        </Button>
      ))}
    </div>
  );
}
