import {
  Card,
  TabList,
  Tab,
  ProgressBar,
  Text,
  Flex,
  Button,
  Metric,
  BadgeDelta,
  TabGroup,
} from "@tremor/react";

import { useState } from "react";

const products = [
  {
    title: "Product A",
    value: 38,
    metric: "$ 100,838",
    location: "A",
  },
  {
    title: "Product B",
    value: 34,
    metric: "$ 90,224",
    location: "A",
  },
  {
    title: "Product C",
    value: 28,
    metric: "$ 74,301",
    location: "A",
  },
  {
    title: "Product Z",
    value: 82,
    metric: "$ 108,799",
    location: "B",
  },
  {
    title: "Product E",
    value: 10,
    metric: "$ 13,268",
    location: "B",
  },
  {
    title: "Product N",
    value: 8,
    metric: "$ 10,614",
    location: "B",
  },
];

export default function TotalSalesCard() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedLocation = selectedIndex === 0 ? "A" : "B";

  return (
    <Card className="max-w-md mx-auto">
      <Flex alignItems="start">
        <Text>Total Sales</Text>
        <BadgeDelta deltaType="moderateIncrease">23.1%</BadgeDelta>
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="space-x-3 truncate"
      >
        <Metric>$ 442,276</Metric>
        <Text>from $ 382,482</Text>
      </Flex>
      <TabGroup
        index={selectedIndex}
        onIndexChange={setSelectedIndex}
        className="mt-6"
      >
        <TabList>
          <Tab>Location A</Tab>
          <Tab>Location B</Tab>
        </TabList>
      </TabGroup>
      {products
        .filter((item) => item.location === selectedLocation)
        .map((item) => (
          <div key={item.title} className="space-y-2 mt-4">
            <Flex>
              <Text>{item.title}</Text>
              <Text>{`${item.value}% (${item.metric})`}</Text>
            </Flex>
            <ProgressBar value={item.value} />
          </div>
        ))}
      <Flex className="mt-6 pt-4 border-t">
        <Button
          size="xs"
          variant="light"
          //   icon={ArrowNarrowRightIcon}
          iconPosition="right"
        >
          View more
        </Button>
      </Flex>
    </Card>
  );
}
