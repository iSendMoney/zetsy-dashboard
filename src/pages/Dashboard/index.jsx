import React from "react";
import Navbar from "../../components/Navbar";

import Sidebar from "../../components/Sidebar";
import Analytics from "../DashboardContainer/Analytics";
import Calendar from "../DashboardContainer/Calendar";
import Chat from "../DashboardContainer/Chat";
import Ecommerce from "../DashboardContainer/Ecommerce";
import Invoice from "../DashboardContainer/Invoice";
import Mail from "../DashboardContainer/Mail";
import Media from "../DashboardContainer/Media";
import Payments from "../DashboardContainer/Payments/Payments";
import SidebarApp from "../DashboardContainer/SidebarApp";
import Themes from "../DashboardContainer/Themes";
import Todo from "../DashboardContainer/Todo";
import User from "../DashboardContainer/User/User";
import NewProduct from "../DashboardContainer/NewProduct"

import "./styles/style.css";
// import { useShopContext } from "../../contexts/Shop";
import BulkUpload from "../DashboardContainer/BulkUpload";
import { useUtilityContext } from "../../contexts/Utilities";
import AnalyticsNew from "../DashboardContainer/AnalyticsNew";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("app");
  const [{theme}, dispatchUtilityData] = useUtilityContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashboard__container">
      <Sidebar theme={theme} handleTabChange={handleTabChange} activeTab={activeTab} />

      <div className="dashboardContent__container">
        <Navbar theme={theme} dispatchUtilityData={dispatchUtilityData}/>

        {activeTab === "app" && <SidebarApp theme={theme}/>}
        {/* {activeTab === "analytics" && <Analytics />} */}
        {activeTab === "analytics" && <AnalyticsNew theme={theme}/>}
        {activeTab === "payments" && <Payments />}
        {activeTab === "media" && <Media />}
        {activeTab === "user" && <User />}
        {activeTab === "e-commerce" && <Ecommerce handleTabChange={handleTabChange}/>}
        {activeTab === "invoice" && <Invoice />}
        {activeTab === "themes" && <Themes />}
        {activeTab === "mail" && <Mail />}
        {activeTab === "chat" && <Chat />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "todo" && <Todo />}
        {activeTab === "new-product" && <NewProduct handleTabChange={handleTabChange}/>}
        {activeTab === "bulk-upload" && <BulkUpload />}
      </div>
    </div>
  );
}
