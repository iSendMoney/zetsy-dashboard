import { Button } from "@mui/material";
import React from "react";

import "./styles/style.css";

export default function Payments() {
  return (
    <div className="paymentsTab__container">
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
        </div>
        <div className="summaryItem paper"></div>
      </div>
    </div>
  );
}
