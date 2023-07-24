import { Card, Flex, Metric, BadgeDelta, Text, Grid } from "@tremor/react";

const categories = [
  {
    title: "Sales",
    metric: "$ 23,456",
  },
  {
    title: "Profit",
    metric: "$ 13,123",
  },
  {
    title: "Customers",
    metric: "456",
  },
  {
    title: "Active Users",
    metric: "456",
  },
];

export default function KPI() {
  return (
    <Grid numItemsSm={3} numItemsLg={4} className="gap-6 mt-4">
      {categories.map((item) => (
        <Card className="max-w-sm" key={item.title}>
          <Flex>
            <Text>{item.title}</Text>
            <BadgeDelta
              deltaType="moderateIncrease"
              isIncreasePositive={true}
              size="xs"
            >
              +12.3%
            </BadgeDelta>
          </Flex>
          <Metric>{item.metric}</Metric>
        </Card>
      ))}
    </Grid>
  );
}
