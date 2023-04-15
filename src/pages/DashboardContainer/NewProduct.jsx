import React from "react";
import { Button, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./styles/newproduct.style.css";
import MUIRichTextEditor from "mui-rte";

export default function NewProduct() {
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
  const [images, setImages] = React.useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dashboard__newProduct__container">
      <h1>Add a new product</h1>
      <span>Dashboard - E-Commerce - New product</span>

      <main>
        <div className="paper productDescription">
          <form>
            <TextField
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
            />
            <div className="richTextEditor">
              <label>Product Description</label>
              <ThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor inlineToolbar={true} autoAdjustHeight />
              </ThemeProvider>
            </div>

            <div className="images">
              <label>Images</label>
              {images.length > 0 && (
                <div>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Uploaded image"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div
                className="dropzone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  multiple
                />
              </div>

              <div className="imageActions">
                <Button>Remove All</Button>
              </div>
            </div>
          </form>
        </div>
        <div className="paper">
          <form></form>
        </div>
      </main>
    </div>
  );
}
