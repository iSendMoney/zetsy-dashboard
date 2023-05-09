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
import User from "../DashboardContainer/User/User";
import NewProduct from "../DashboardContainer/NewProduct"
import KanbanBoard from "../../components/KanbanBoard";

import "./styles/style.css";
// import { useShopContext } from "../../contexts/Shop";
import BulkUpload from "../DashboardContainer/BulkUpload";
import { useUtilityContext } from "../../contexts/Utilities";
import AnalyticsNew from "../DashboardContainer/AnalyticsNew";
import Board from "../DashboardContainer/Todo";
import Profile from "../DashboardContainer/Profile";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("app");
  const [{ theme }, dispatchUtilityData] = useUtilityContext();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard__container">
      <Sidebar
        theme={theme}
        handleTabChange={handleTabChange}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="dashboardContent__container">
        <Navbar
          setActiveTab={setActiveTab}
          theme={theme}
          dispatchUtilityData={dispatchUtilityData}
        />

        {activeTab === "app" && <SidebarApp theme={theme} />}
        {/* {activeTab === "analytics" && <Analytics />} */}
        {activeTab === "analytics" && <AnalyticsNew theme={theme} />}
        {activeTab === "payments" && <Payments theme={theme} />}
        {activeTab === "media" && <Media />}
        {activeTab === "user" && <User />}
        {activeTab === "e-commerce" && (
          <Ecommerce handleTabChange={handleTabChange} theme={theme} />
        )}
        {activeTab === "invoice" && <Invoice />}
        {activeTab === "themes" && <Themes />}
        {activeTab === "mail" && <Mail />}
        {activeTab === "chat" && <Chat />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "todo" && <KanbanBoard theme= {theme} />}
        {activeTab === "new-product" && (
          <NewProduct theme={theme} handleTabChange={handleTabChange} />
        )}
        {activeTab === "bulk-upload" && <BulkUpload />}
        {activeTab === "profile" && <Profile theme={theme}/>}
      </div>
    </div>
  );
}
