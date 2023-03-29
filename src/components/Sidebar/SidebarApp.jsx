import moment from "moment";
import React from "react";

import OrderAnalyticsCard from "./OrderAnalyticsCard";
import AnalyticsNumbersData from "../../mocks/analyticsNumbers.json";

import "./styles/style.css";

export default function SidebarApp() {
  return (
    <div className="sidebarApp__container">
      <div className="header">
        <div className="greetings">
          <h2>Good Evening, Jessica Singh Shrestha</h2>
          <p>Here's your stat's for {moment().format("LL")}</p>
        </div>
        <div className="redirectToSite">
          <p>Go to your site</p> <i className="ri-arrow-right-up-line"></i>
        </div>
      </div>
      <div className="orderAnalytics">
        {AnalyticsNumbersData.map((data, key) => (
          <OrderAnalyticsCard
            key={key}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
