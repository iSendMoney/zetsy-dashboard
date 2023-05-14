import React from "react";
import {
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MUIRichTextEditor from "mui-rte";
import TagsInput from "react-tagsinput";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import "react-tagsinput/react-tagsinput.css";

import "./styles/newproduct.style.css";
import { convertFromHTML, convertToRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

const fileTypes = ["JPEG", "PNG", "GIF"];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function NewProduct({ handleTabChange, theme }) {
  const defaultTheme = createTheme({
    components: {
      MUIRichTextEditor: {
        root: {
          width: "100%",
        },
        editor: {
          minHeight: "99vh",
          maxHeight: "100vh",
          overflow: "auto",
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "standard",
        },
      },
    },
  });

  // drag and drop
  const [files, setFiles] = React.useState([]);

  const handleChange = (file) => {
    const myObj = {
      data: file,
      [Symbol.iterator]: function () {
        let i = 0;
        const data = this.data;
        return {
          next: function () {
            if (i < data.length) {
              return { value: data[i++], done: false };
            } else {
              return { done: true };
            }
          },
        };
      },
    };

    var arrayImages = [];
    for (const value of myObj) {
      arrayImages.push(value);
    }

    setFiles(arrayImages);
  };

  const onEditorChange = (event) => {
    const rteContent = stateToHTML(event.getCurrentContent()); // for rte content with text formating
    rteContent && setProduct({ ..._product, description: rteContent }); // store your rteContent to state
  };

  // states

  const [_product, setProduct] = React.useState({
    name: "",
    description: "",
    quantity: "",
    product_code: "",
    sku: "",
    category: "",
    tags: [],
    regular_price: "",
    sale_price: "",
    includes_tax: true,
  });

  // Add Product Handler

  const addProduct = () => {
    console.log(_product);
    console.log(files);
    console.log("add product");
  };

  return (
    <div className={`dashboard__newProduct__container ${theme}`}>
      <div className="header">
        <div>
          <h1>Add a new product</h1>
          <span className="subtitle">Dashboard - E-Commerce - New product</span>
        </div>
        <Button onClick={() => handleTabChange("bulk-upload")}>
          <i className="ri-folder-shared-line"></i> Bulk Upload
        </Button>
      </div>

      <main>
        <div className="paper productDescription">
          <form>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
              onChange={(e) =>
                setProduct({ ..._product, name: e.target.value })
              }
              value={_product.name}
            />
            <div className="richTextEditor">
              <label>
                <i className="ri-product-hunt-line"></i> Product Description
              </label>
              <ThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor
                  inlineToolbar={true}
                  autoAdjustHeight
                  onChange={onEditorChange}
                />
              </ThemeProvider>
            </div>

            <div className="images">
              <label>
                <i className="ri-landscape-line"></i> Images
              </label>
              <FileUploader
                className="w-full"
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              <p>
                {files ? (
                  <span className="uploadedImages">
                    {files.map((file, index) => (
                      <span className="image" key={index}>
                        <img src={URL.createObjectURL(file)} alt="" />
                      </span>
                    ))}
                  </span>
                ) : (
                  "No files uploaded yet!"
                )}
              </p>

              {files.length > 0 && (
                <div className="imageActions">
                  <Button onClick={() => setFiles([])}>
                    <i className="ri-delete-bin-5-line"></i> Remove All
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="paper productInventory">
          <form>
            <div className="flex">
              <label htmlFor="">
                <i className="ri-shopping-cart-2-line"></i> Inventory
              </label>
              <TextField
                id="outlined-basic"
                label="Quantity"
                variant="outlined"
                value={_product.quantity}
                onChange={(e) =>
                  setProduct({ ..._product, quantity: e.target.value })
                }
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Product Code"
              variant="outlined"
              value={_product.product_code}
              onChange={(e) =>
                setProduct({ ..._product, product_code: e.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Product SKU"
              variant="outlined"
              value={_product.sku}
              onChange={(e) => setProduct({ ..._product, sku: e.target.value })}
            />

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={_product.category}
                  label="Category"
                  onChange={(e) =>
                    setProduct({ ..._product, category: e.target.value })
                  }
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* <TagInput
              inputStyle={{
                width: "400px",
              }}
              placeholder={"Click Enter to add tags"}
              tags={tags}
              setTags={setTags}
              closeButtonStyle={{ color: "blue" }}
            /> */}
            <div className="flex">
              <label htmlFor="">
                <i className="ri-price-tag-3-line"></i> Tags
              </label>
              <TagsInput
                value={_product.tags}
                onChange={(e) =>
                  setProduct({ ..._product, tags: e.target.value })
                }
              />
            </div>

            <div className="flex">
              <label style={{ marginBottom: "10px" }} htmlFor="">
                <i className="ri-money-dollar-circle-line"></i> Price
                Information
              </label>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Regular Price
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                  value={_product.regular_price}
                  onChange={(e) =>
                    setProduct({ ..._product, regular_price: e.target.value })
                  }
                />
              </FormControl>
            </div>

            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">
                Sale Price
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                value={_product.sale_price}
                onChange={(e) =>
                  setProduct({ ..._product, sale_price: e.target.value })
                }
              />
            </FormControl>

            <FormControlLabel
              control={
                <IOSSwitch
                  sx={{ m: 1 }}
                  defaultChecked={_product.includes_tax}
                />
              }
              label="Price includes taxes"
              onChange={() =>
                setProduct({
                  ..._product,
                  includes_tax: !_product.includes_tax,
                })
              }
            />

            <Button className="newProductBtn" onClick={() => addProduct()}>
              <i className="ri-add-line"></i> Create Product
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
