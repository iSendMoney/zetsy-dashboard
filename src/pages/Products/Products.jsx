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
} from "@tremor/react";
import { TextInput } from "@tremor/react";

const colors = {
  "In Stock": "emerald",
  "Out of Stock": "rose",
  "Low Stock": "gray",
};

const transactions = [
  {
    productId: "#123456",
    stock: 100,
    item: "Under Armour Shorts",
    status: "In Stock",
    amount: "$ 49.90",
    link: "#",
  },
  {
    productId: "#234567",
    stock: 0,
    item: "Book - Wealth of Nations",
    status: "Out of Stock",
    amount: "$ 19.90",
    link: "#",
  },
  {
    productId: "#345678",
    stock: 100,
    item: "Garmin Forerunner 945",
    status: "Low Stock",
    amount: "$ 499.90",
    link: "#",
  },
  {
    productId: "#4567890",
    stock: 100,
    item: "Running Backpack",
    status: "In Stock",
    amount: "$ 89.90",
    link: "#",
  },
  {
    productId: "#5678901",
    stock: 100,
    item: "Rolex Submariner Replica",
    status: "In Stock",
    amount: "$ 299.90",
    link: "#",
  },
  {
    productId: "#6789012",
    stock: 100,
    item: "On Clouds Shoes",
    status: "Low Stock",
    amount: "$ 290.90",
    link: "#",
  },
  {
    productId: "#78901234",
    stock: 100,
    item: "Ortovox Backpack 40l",
    status: "Out of Stock",
    amount: "$ 150.00",
    link: "#",
  },
  {
    productId: "#89012345",
    stock: 100,
    item: "Oakley Jawbreaker",
    status: "Low Stock",
    amount: "$ 190.90",
    link: "#",
  },
];

export default function Products() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div>
          <Flex justifyContent="start" className="space-x-2">
            <Title>Products</Title>
            <Badge color="gray">100</Badge>
          </Flex>
          <Text className="mt-2">Overview of the product inventory.</Text>
        </div>
        <Button size="xs" variant="secondary" color="gray">
          + Add Product
        </Button>
      </div>
      <TextInput className="mt-4" placeholder="Search..." />

      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Product ID</TableHeaderCell>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell>Inventory</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">Amount</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map((item) => (
            <TableRow key={item.productId}>
              <TableCell>{item.productId}</TableCell>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.stock}</TableCell>
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

      <div class="hidden mt-3 sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700 flex items-center gap-1">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">10</span>
            of
            <span class="font-medium">97</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
            <a
              href="#"
              aria-current="page"
              class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </Card>
  );
}
