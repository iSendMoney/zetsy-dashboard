import React from "react";
import ConversionRates from "../Analytics/ConversionRates";
import OrderTimeline from "../Analytics/OrderTimeline";
import ProductCategoySales from "../Analytics/ProductCategoySales";
import "./styles/analytics.style.css";

export default function Analytics() {
  return (
    <div className="analyticsTab__container">
      <div className="conversionsAndCategory">
        <ConversionRates />
        <ProductCategoySales />
        <OrderTimeline/>
      </div>
    </div>
  );
}
