import { Button } from "@mui/material";
import React from "react";
import { Text } from "@tremor/react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useActiveDashboard } from "../../contexts/ActiveDashboardPage";
import './styles/style.css'

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
      <Button
        className={activeDashboard === "home" && "active"}
        onClick={() => handleActiveDashboard("home")}
      >
        <i className="ri-home-fill"></i> <Text>Home</Text>
      </Button>
      <Button
        className={activeDashboard === "orders" && "active"}
        onClick={() => handleActiveDashboard("orders")}
      >
        <i className="ri-inbox-2-fill"></i> <Text>Orders</Text>
      </Button>
      <Button
        className={activeDashboard === "products" && "active"}
        onClick={() => handleActiveDashboard("products")}
      >
        <i className="ri-price-tag-3-fill"></i>
        <Text>Products</Text>
      </Button>
      <Button
        className={activeDashboard === "customers" && "active"}
        onClick={() => handleActiveDashboard("customers")}
      >
        <i className="ri-user-3-fill"></i> <Text>Customers</Text>
      </Button>
      <Button
        className={activeDashboard === "content" && "active"}
        onClick={() => handleActiveDashboard("content")}
      >
        <i className="ri-image-fill"></i> <Text>Content</Text>
      </Button>
      <Button
        className={activeDashboard === "analytics" && "active"}
        onClick={() => handleActiveDashboard("analytics")}
      >
        <i className="ri-bar-chart-fill"></i> <Text>Analytics</Text>
      </Button>
      <Button
        className={activeDashboard === "marketing" && "active"}
        onClick={() => handleActiveDashboard("marketing")}
      >
        <i className="ri-focus-2-line"></i> <Text>Marketing</Text>
      </Button>
      <Button
        className={activeDashboard === "discounts" && "active"}
        onClick={() => handleActiveDashboard("discounts")}
      >
        <i className="ri-gift-2-fill"></i> <Text>Discounts</Text>
      </Button>
      <Button
        className={activeDashboard === "settings" && "active"}
        onClick={() => handleActiveDashboard("settings")}
      >
        <i className="ri-settings-3-fill"></i> <Text>Settings</Text>
      </Button>
    </div>
  );
}
