import moment from "moment";
import React from "react";

import OrderAnalyticsCard from "./OrderAnalyticsCard";
import AnalyticsNumbersData from "../../mocks/analyticsNumbers.json";

import "./styles/style.css";
import RecentOrders from "../../components/RecentOrders";
import TopSellingProducts from "../../components/TopSellingProducts";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import { useAuthContext } from "../../contexts/Auth";
import { useShopContext } from "../../contexts/Shop";

export default function SidebarApp({ theme }) {
  const [{ user }] = useAuthContext();
  const [{ shop }] = useShopContext();
  return (
    <div className={`sidebarApp__container ${theme}`}>
      <Helmet>
        <title>
          Dashboard | Zetsy - Your all in one store for online retails.
        </title>
      </Helmet>
      <div className="header">
        <div className="greetings text-base">
          <h2>Good Evening, {user.email}</h2>
          <p>Here's your stat's for {moment().format("LL")}</p>
        </div>
        <div className="redirectToSite">
          <p>
            <a href={`https://${shop.subdomain}.zetsy.store`} target="_blank">
              Go to your site
            </a>
          </p>{" "}
          <i className="ri-arrow-right-up-line"></i>
        </div>
      </div>
      <div className="orderAnalytics">
        {AnalyticsNumbersData.map((data, key) => (
          <OrderAnalyticsCard key={key} data={data} />
        ))}
      </div>

      <div className="productData">
        <div className="recentOrders">
          <h3>
            <i className="ri-shopping-cart-line"></i> Recent Orders
          </h3>
          <RecentOrders />
          <Button>
            View All <i className="ri-arrow-right-line"></i>
          </Button>
        </div>
        <div className="topSellingProducts">
          <h3>
            <i className="ri-magic-line"></i>Top Selling Products
          </h3>
          <TopSellingProducts />
          <Button>
            View All <i className="ri-arrow-right-line"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
