import { Flex, Text, Title } from "@tremor/react";
import React from "react";
import KPI from "../../components/KPI";
import RecentPurchases from "../../components/RecentPurchases";

export default function Home() {
  return (
    <div>
      <Flex>
        <div>
          <Title><i className="ri-dashboard-line"></i> Dashboard</Title>
          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
        </div>
        <a href="">
          <Text>
            <i className="ri-arrow-right-up-line"></i> Go to your site.
          </Text>
        </a>
      </Flex>

      <KPI />
      <div className="mt-6">
        <RecentPurchases />
      </div>
    </div>
  );
}
