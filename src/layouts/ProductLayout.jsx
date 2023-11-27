import { Card } from "@tremor/react";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <Card>
      <Outlet />
    </Card>
  );
};

export default ProductLayout;
