import { Card, Grid, Metric, Text } from "@tremor/react";

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
];

export default function KPI() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6 mt-4">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
        </Card>
      ))}
    </Grid>
  );
}