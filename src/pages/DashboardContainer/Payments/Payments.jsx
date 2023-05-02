import { Button } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import RevenueLineChart from "../../../components/Payments/RevenueLineChart";

import "./styles/style.css";

export default function Payments({theme}) {
  return (
    <div className={`paymentsTab__container ${theme}`}>
      <Helmet>
        <title>
          Payments | Zetsy - Your all in one store for online retails.
        </title>
      </Helmet>
      <div className="paymentsSummary">
        <div className="summaryItem paper income">
          <div className="summaryHeader">
            <div>
              <h4>Income</h4>
              <h1>NPR 18,756</h1>
              <p>
                <i className="ri-funds-line"></i>
                <span>+2.6% than last month</span>
              </p>
            </div>
            <Button>
              <i className="ri-arrow-left-down-line"></i>
            </Button>
          </div>
          <RevenueLineChart />
        </div>
        <div className="summaryItem paper expense">
          <div className="summaryHeader">
            <div>
              <h4>Expense</h4>
              <h1>NPR 18,756</h1>
              <p>
                <i className="ri-funds-line"></i>
                <span>+2.6% than last month</span>
              </p>
            </div>
            <Button>
              <i class="ri-arrow-right-up-line"></i>
            </Button>
          </div>
          <RevenueLineChart />
        </div>
        <div className="summaryItem paper cardDetails">
          <div className="overlay">
            <h4>Current Balance</h4>
            <div className="balance">
              <h1>NPR 18,756</h1>
              <i className="ri-eye-off-line"></i>
            </div>
            <div className="cardNumber">
              <img
                src="https://minimals.cc/assets/icons/payments/ic_mastercard.svg"
                loading="lazy"
                alt=""
              />
              <h3>**** **** **** 1234</h3>
            </div>
            <div className="cardDetailDescription">
              <div className="cardDetail">
                <h4>Card Holder</h4>
                <h3>John Doe</h3>
              </div>
              <div className="cardDetail">
                <h4>Expiry Date</h4>
                <h3>12/24</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
