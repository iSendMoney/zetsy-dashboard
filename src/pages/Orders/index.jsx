import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
  Select,
  SelectItem,
} from "@tremor/react";
import { TextInput } from "@tremor/react";
import React from "react";

const colors = {
  "Ready for dispatch": "gray",
  Cancelled: "rose",
  Shipped: "emerald",
};

const transactions = [
  {
    transactionID: "#123456",
    user: "Lena Mayer",
    item: "Under Armour Shorts",
    status: "Ready for dispatch",
    amount: "$ 49.90",
    link: "#",
  },
  {
    transactionID: "#234567",
    user: "Max Smith",
    item: "Book - Wealth of Nations",
    status: "Ready for dispatch",
    amount: "$ 19.90",
    link: "#",
  },
  {
    transactionID: "#345678",
    user: "Anna Stone",
    item: "Garmin Forerunner 945",
    status: "Cancelled",
    amount: "$ 499.90",
    link: "#",
  },
  {
    transactionID: "#4567890",
    user: "Truls Cumbersome",
    item: "Running Backpack",
    status: "Shipped",
    amount: "$ 89.90",
    link: "#",
  },
  {
    transactionID: "#5678901",
    user: "Peter Pikser",
    item: "Rolex Submariner Replica",
    status: "Cancelled",
    amount: "$ 299.90",
    link: "#",
  },
  {
    transactionID: "#6789012",
    user: "Phlipp Forest",
    item: "On Clouds Shoes",
    status: "Ready for dispatch",
    amount: "$ 290.90",
    link: "#",
  },
  {
    transactionID: "#78901234",
    user: "Mara Pacemaker",
    item: "Ortovox Backpack 40l",
    status: "Shipped",
    amount: "$ 150.00",
    link: "#",
  },
  {
    transactionID: "#89012345",
    user: "Sev Major",
    item: "Oakley Jawbreaker",
    status: "Ready for dispatch",
    amount: "$ 190.90",
    link: "#",
  },
];

export default function Orders() {
  const [selectedStatus, setSelectedStatus] = React.useState("all");

  const isSalesPersonSelected = (salesPerson) =>
    salesPerson.status === selectedStatus || selectedStatus === "all";
  return (
    <Card>
      <Flex justifyContent="start" className="space-x-2">
        <Title>Purchases</Title>
        <Badge color="gray">8</Badge>
      </Flex>
      <Text className="mt-2">Overview of this month&apos;s purchases</Text>
      <div className="flex items-center gap-2 py-2">
        <TextInput placeholder="Search..." />
        <div className="flex">
          <Select
            className="max-w-full sm:max-w-xs"
            defaultValue="all"
            onValueChange={setSelectedStatus}
          >
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Shipped">Shipped</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
            <SelectItem value="Ready for dispatch">
              Ready for dispatch
            </SelectItem>
          </Select>
        </div>
      </div>

      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Transaction ID</TableHeaderCell>
            <TableHeaderCell>User</TableHeaderCell>
            <TableHeaderCell>Item</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            <TableHeaderCell>Link</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.transactionID}>
                <TableCell>{item.transactionID}</TableCell>
                <TableCell>{item.user}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell>
                  <Badge color={colors[item.status]} size="xs">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{item.amount}</TableCell>
                <TableCell>
                  <Button size="xs" variant="secondary" color="gray">
                    See details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div className="hidden mt-3 sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 flex items-center gap-1">
            Showing
            <span className="font-medium">1</span>
            to
            <span className="font-medium">10</span>
            of
            <span className="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </Card>
  );
}
