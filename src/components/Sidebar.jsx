import React from "react";
import { useAuthContext } from "../contexts/Auth";

export default function Sidebar({ handleTabChange, activeTab, theme, setActiveTab }) {
  const [{ user }] = useAuthContext();

  return (
    <div className={`sidebar__container ${theme}`}>
      <h1 className="logo__container">Zetsy.</h1>

      <div className="userIcon" onClick={() => setActiveTab("profile")}>
        <img
          src={
            user.picture ||
            "https://ik.imagekit.io/jckalabs/Zetsy/avatar_default.jpg?updatedAt=1683283007793"
          }
          loading="lazy"
          alt=""
        />
        <div>
          <p className="text-base">{user?.email.split("@")[0] || "John Doe"}</p>
          <p className="text-sm">{user.role}</p>
        </div>
      </div>

      <section className="general text-base">
        <h2>General</h2>
        <div
          className={activeTab === "app" ? "active" : ""}
          onClick={() => handleTabChange("app")}
        >
          <i className="ri-apps-line"></i>
          <p>App</p>
        </div>
        <div
          className={activeTab === "analytics" ? "active" : ""}
          onClick={() => handleTabChange("analytics")}
        >
          <i className="ri-pie-chart-line"></i>
          <p>Analytics</p>
        </div>
        <div
          className={activeTab === "payments" ? "active" : ""}
          onClick={() => handleTabChange("payments")}
        >
          <i className="ri-secure-payment-line"></i>
          <p>Payments</p>
        </div>
        <div
          className={activeTab === "media" ? "active" : ""}
          onClick={() => handleTabChange("media")}
        >
          <i className="ri-image-line"></i>
          <p>Media</p>
        </div>
      </section>

      <section className="management">
        <h2>Management</h2>
        <div
          className={activeTab === "user" ? "active" : ""}
          onClick={() => handleTabChange("user")}
        >
          <i className="ri-user-line"></i>
          <p>User</p>
        </div>
        <div
          className={activeTab === "e-commerce" ? "active" : ""}
          onClick={() => handleTabChange("e-commerce")}
        >
          <i className="ri-shopping-cart-line"></i>
          <p>E-Commerce</p>
        </div>
        <div
          className={activeTab === "invoice" ? "active" : ""}
          onClick={() => handleTabChange("invoice")}
        >
          <i className="ri-coupon-3-line"></i>
          <p>Invoice</p>
        </div>
        <div
          className={activeTab === "themes" ? "active" : ""}
          onClick={() => handleTabChange("themes")}
        >
          <i className="ri-t-shirt-2-line"></i>
          <p>Themes</p>
        </div>
      </section>

      <section className="app">
        <h2>App</h2>
        <div
          className={activeTab === "mail" ? "active" : ""}
          onClick={() => handleTabChange("mail")}
        >
          <i className="ri-mail-line"></i>
          <p>Mail</p>
        </div>
        <div
          className={activeTab === "chat" ? "active" : ""}
          onClick={() => handleTabChange("chat")}
        >
          <i className="ri-chat-3-line"></i>
          <p>Chat</p>
        </div>
        <div
          className={activeTab === "calendar" ? "active" : ""}
          onClick={() => handleTabChange("calendar")}
        >
          <i className="ri-calendar-2-line"></i>
          <p>Calendar</p>
        </div>
        <div
          className={activeTab === "todo" ? "active" : ""}
          onClick={() => handleTabChange("todo")}
        >
          <i className="ri-todo-line"></i>
          <p>Todo</p>
        </div>
      </section>
    </div>
  );
}
