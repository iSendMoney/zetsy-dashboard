import { Button, MenuItem, TextField } from "@mui/material";
import { TextInput } from "@tremor/react";
import { useNavigate } from "react-router-dom";
import "../styles/style.scss";
import React from "react";
import { useForm } from "react-hook-form";

const status = [
  {
    value: "In Stock",
    label: "In Stock",
  },
  {
    value: "Out of Stock",
    label: "Out of Stock",
  },
  {
    value: "Low Stock",
    label: "Low Stock",
  },
];

const CreateProduct = () => {
  const navigate = useNavigate();
  // const [selectedStatus, setSelectedStatus] = React.useState("all");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    watch,
  } = useForm();

  const file = watch("image", false);
  console.log(file[0]);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  console.log(errors);

  const handleReset = () => {
    reset({
      title: "",
      description: "",
      image: "",
      status: "",
      stock: "",
      price: "",
    });
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p onClick={() => navigate("/products")} className=" cursor-pointer">
            <i className="ri-arrow-left-s-line"></i> Products{" "}
          </p>
          <h1>Add Product</h1>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            onClick={() => {
              handleReset();
            }}
          >
            Discard
          </Button>
          <Button
            id="submit"
            variant="contained"
            className=" !bg-accent"
            onClick={handleSubmit((data) => console.log(data))}
          >
            Save
          </Button>
        </div>
      </div>
      <div className=" mt-3 flex flex-col gap-5 pb-20">
        {/* title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <TextInput
            id="title"
            placeholder="eg:- Short Sleeve t-shirt"
            type="text"
            required
            {...register("title", {
              required: "title is a required field *",
              min: 3,
              max: 50,
            })}
          />
          {errors?.title?.message && (
            <em className=" text-error">{errors?.title?.message}</em>
          )}
        </div>
        {/* description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="20"
            rows="5"
            placeholder="eg:- lorem ipsum"
            {...register("description", {
              required: "description is required *",
              min: 10,
              max: 500,
            })}
          ></textarea>
          {errors?.description?.message && (
            <em className=" text-error">{errors?.description?.message}</em>
          )}
        </div>
        {/* media */}
        <div className="flex flex-col gap-2">
          <label htmlFor="media">Media</label>
          <div className="flex items-center justify-center border-2 border-dashed border-[#000] h-[400px]">
            <input
              type="file"
              name="media"
              id="media"
              accept="image/*"
              {...register("image", {
                required: "select an image for your product",
              })}
            />
          </div>
          {file && file !== null && (
            <div>
              <div className="relative">
                <img
                  src={URL.createObjectURL(file[0])}
                  alt="preview-image"
                  className="h-full w-full"
                />
                <p
                  className=" absolute right-2 top-2 bg-white cursor-pointer text-lg"
                  onClick={() =>
                    reset({
                      image: "",
                    })
                  }
                >
                  <i className="ri-close-line"></i>
                </p>
              </div>
            </div>
          )}
          {errors?.image?.message && (
            <em className=" text-error">{errors?.image?.message}</em>
          )}
        </div>
        {/* inventory,price,stock */}
        <div className="flex gap-2">
          <div className="flex-1">
            <label>Inventory</label>
            <TextField
              select
              fullWidth
              defaultValue=""
              label="Select"
              inputProps={register("status", {
                required: "Please enter status",
              })}
              error={errors.currency}
              helperText={errors.currency?.message}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {errors?.status?.message && (
              <em className=" text-error">{errors?.status?.message}</em>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="Stock">Stock</label>
            <TextInput
              type="text"
              placeholder="eg:-10"
              {...register("stock", {
                required: "Enter a valid stock for the product",
              })}
            />
            {errors?.stock?.message && (
              <em className=" text-error">{errors?.stock?.message}</em>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="price">Price</label>
            <TextInput
              type="text"
              placeholder="price"
              {...register("price", { required: "Enter valid password" })}
            />
            {errors?.price?.message && (
              <em className=" text-error">{errors?.price?.message}</em>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
