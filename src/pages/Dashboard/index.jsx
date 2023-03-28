import React from "react";
import Navbar from "../../components/Navbar";

import Sidebar from "../../components/Sidebar";
import Analytics from "../../components/Sidebar/Analytics";
import Calendar from "../../components/Sidebar/Calendar";
import Chat from "../../components/Sidebar/Chat";
import Ecommerce from "../../components/Sidebar/Ecommerce";
import Invoice from "../../components/Sidebar/Invoice";
import Mail from "../../components/Sidebar/Mail";
import Media from "../../components/Sidebar/Media";
import Payments from "../../components/Sidebar/Payments";
import SidebarApp from "../../components/Sidebar/SidebarApp";
import Themes from "../../components/Sidebar/Themes";
import Todo from "../../components/Sidebar/Todo";
import User from "../../components/Sidebar/User";

import "./styles/style.css";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("app");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashboard__container">
      <Sidebar handleTabChange={handleTabChange} activeTab={activeTab} />

      <div className="dashboardContent__container">
        <Navbar/>
        
        {activeTab === "app" && <SidebarApp />}
        {activeTab === "analytics" && <Analytics />}
        {activeTab === "payments" && <Payments />}
        {activeTab === "media" && <Media />}
        {activeTab === "user" && <User />}
        {activeTab === "e-commerce" && <Ecommerce />}
        {activeTab === "invoice" && <Invoice />}
        {activeTab === "themes" && <Themes />}
        {activeTab === "mail" && <Mail />}
        {activeTab === "chat" && <Chat />}
        {activeTab === "calendar" && <Calendar />}
        {activeTab === "todo" && <Todo />}
      </div>
    </div>
  );
}
