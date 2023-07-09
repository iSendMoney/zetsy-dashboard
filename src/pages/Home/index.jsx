import { Text, Title } from "@tremor/react";
import React from "react";
import KPI from "../../components/KPI";
import RecentPurchases from "../../components/RecentPurchases";

export default function Home() {
  return (
    <div>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <KPI />
      <div className="mt-6">
        <RecentPurchases />
      </div>
    </div>
  );
}
