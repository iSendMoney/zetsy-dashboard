import { Card, Text, Flex, Metric, CategoryBar, BadgeDelta, Grid } from "@tremor/react";

const categories = [
  {
    title: "Sales",
    metric: "$ 456,000",
  },
  {
    title: "Transactions",
    metric: "89,123",
  },
  {
    title: "Merchants",
    metric: "22",
  },
  {
    title: "Orders",
    metric: "678",
  },
];

export default function TotalPerformanceScore() {
  return (
    <Card className="max-w-lg mx-auto">
      <Card>
        <Flex>
          <Text className="truncate">Overall Performance Score</Text>
          <BadgeDelta deltaType="moderateIncrease">13.1%</BadgeDelta>
        </Flex>
        <Flex justifyContent="start" alignItems="baseline" className="space-x-1">
          <Metric>65</Metric>
          <Text>/100</Text>
        </Flex>
        <CategoryBar
          values={[10, 25, 45, 20]}
          colors={["emerald", "yellow", "orange", "red"]}
          markerValue={65}
          tooltip="65%"
          className="mt-2"
        />
      </Card>
      <Grid numItemsSm={2} className="mt-4 gap-4">
        {categories.map((item) => (
          <Card key={item.title}>
            <Metric className="mt-2 truncate">{item.metric}</Metric>
            <Text>{item.title}</Text>
          </Card>
        ))}
      </Grid>
    </Card>
  );
}