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

export default function Sales({theme}) {
  return (
    <Grid numColsSm={4} className="mt-6 gap-6">
      {categories.map((item) => (
        <Card key={item.title} className={`p-4 py-2.5 ${theme === "dark" && "bg-[#212B36] ring-[#212B36] drop-shadow-[rgba(0, 0, 0, 0.2)_0px_0px_2px_0px]"}`}>
          <Text className="text-base">{item.title}</Text>
          <Metric className={`${theme === "dark" && "text-white"}`}>{item.metric}</Metric>
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
              className="text-base focus:ring-0 focus:ring-offset-0"
            >
              View more
            </Button>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
