import { Button } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import ConversionRates from "../../components/Analytics/ConversionRates";
import OrderTimeline from "../../components/Analytics/OrderTimeline";
import ProductCategoySales from "../../components/Analytics/ProductCategoySales";
import Summary from "../../components/Analytics/Summary";
import "./styles/analytics.style.css";
import WebAnalytics from "../../components/Analytics/WebAnalytics";

export default function Analytics() {
  return (
    <div className="analyticsTab__container">
      <Helmet>
        <title>
          Analytics | Zetsy - Your all in one store for online retails.
        </title>
      </Helmet>
      <div className="conversionsAndCategory">
        <ConversionRates />
        <ProductCategoySales />
        <OrderTimeline />
      </div>

      <div className="socialMediaAnalytics__containe">
        <div className="paper top">
          <h3>Traffics By Site</h3>

          <div className="socialMedias">
            <div className="paper">
              <i className="ri-facebook-fill"></i>
              <h2>323.23k</h2>
              <p>Facebook</p>
            </div>
            <div>
              <i className="ri-twitter-fill"></i>
              <h2>323.23k</h2>
              <p>Twitter</p>
            </div>
            <div>
              <i className="ri-instagram-fill"></i>
              <h2>323.23k</h2>
              <p>Instagram</p>
            </div>
            <div>
              <i class="ri-google-fill"></i>
              <h2>323.23k</h2>
              <p>Google</p>
            </div>
          </div>
        </div>
        {/* <WebAnalytics /> */}
        <div className="paper top">
          <h3>
            Your Tools
            <br />
            <span>
              Use tools to reach people who are interested in your business.
            </span>
          </h3>
          <div className="tools">
            <Button className="paper">
              <span>
                <i className="ri-funds-line"></i>
                <p>Ads Tools</p>
              </span>
              <i className="ri-arrow-right-line"></i>
            </Button>
            <Button className="paper">
              <span>
                <i className="ri-stackshare-line"></i>
                <p>Manage Integrations</p>
              </span>
              <i className="ri-arrow-right-line"></i>
            </Button>
            <Button className="paper">
              <span>
                <i className="ri-money-dollar-circle-line"></i>
                <p>Financial Reports</p>
              </span>
              <i className="ri-arrow-right-line"></i>
            </Button>
          </div>
        </div>
        <div className="paper top">
          <div className="summaryDetails">
            <h3>
              Summary
              <br />
              <span>Here's your summarized report of your business.</span>
            </h3>
            <div className="details">
              <div>Revenue: 44</div>
              <div>Sales: 55</div>
              <div>Total Visit: 13</div>
              <div>Leads: 33</div>
            </div>
          </div>
          <Summary />
        </div>
      </div>
    </div>
  );
}
