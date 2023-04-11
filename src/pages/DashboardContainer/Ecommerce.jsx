import React from "react";
import "./styles/ecommerce.style.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductTable from "../../components/Ecommerce/ProductTable";

export default function Ecommerce() {
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="ecommerce__container">
      <div className="ecommerceContainer__header">
        <div>
          <h1>Ecommerce</h1>
          <p>Dashboard - Ecommerce - List</p>
        </div>
        <Button>
          <i className="ri-add-line"></i>
          <p>New Product</p>
        </Button>
      </div>

      <div className="paper productList">
        <div className="filter">
          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="product-status">Status</InputLabel>
              <Select
                labelId="product-status"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="out-of-stock">Out of Stock</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="draft">Draft</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className="productSearchContainer">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search Product..." />
          </div>
        </div>
        <ProductTable/>
      </div>
    </div>
  );
}
