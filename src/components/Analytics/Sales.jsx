import { Card, Metric, Text, Flex, Button, Callout, Grid } from "@tremor/react";

import {
  CogIcon,
  ShieldExclamationIcon,
  CheckCircleIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";

const categories = [
  {
    title: "Sales",
    metric: "$ 23,456",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "Performing as usual",
    color: "emerald",
  },
  {
    title: "Profit",
    metric: "$ 12,789",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "Immediate action required",
  },
  {
    title: "Customers",
    metric: "456",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "Critical performance",
  },
  {
    title: "Orders",
    metric: "1,789",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    status: "Performing as usual",
  },
];

const statusMapping = {
  "Performing as usual": { icon: CheckCircleIcon, color: "emerald" },
  "Immediate action required": { icon: ShieldExclamationIcon, color: "rose" },
  "Critical performance": { icon: CogIcon, color: "amber" },
};

export default function Sales() {
  return (
    <Grid numColsSm={2} className="mt-6 gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Callout
            className="mt-6"
            title={item.status}
            icon={statusMapping[item.status].icon}
            color={statusMapping[item.status].color}
          >
            {item.text}
          </Callout>
          <Flex className="mt-6 pt-4 border-t">
            <Button
              size="xs"
              variant="light"
              icon={ArrowNarrowRightIcon}
              iconPosition="right"
            >
              View more
            </Button>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
