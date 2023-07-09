import { Button } from "@mui/material";
import React from "react";
import { Text } from "@tremor/react";

export default function Sidebar() {
  return (
    <div className="pt-3 desktopLayoutSidebar__container flex flex-col align-start">
      <Button>
        <i className="ri-home-fill"></i> <Text>Home</Text>
      </Button>
      <Button>
        <i className="ri-inbox-2-fill"></i> <Text>Orders</Text>
      </Button>
      <Button>
        <i className="ri-price-tag-3-fill"></i>
        <Text>Products</Text>
      </Button>
      <Button>
        <i className="ri-user-3-fill"></i> <Text>Customers</Text>
      </Button>
      <Button>
        <i className="ri-image-fill"></i> <Text>Content</Text>
      </Button>
      <Button>
        <i className="ri-bar-chart-fill"></i> <Text>Analytics</Text>
      </Button>
      <Button>
        <i className="ri-focus-2-line"></i> <Text>Marketing</Text>
      </Button>
      <Button>
        <i className="ri-gift-2-fill"></i> <Text>Discounts</Text>
      </Button>
      <Button>
        <i className="ri-settings-3-fill"></i> <Text>Settings</Text>
      </Button>
    </div>
  );
}
