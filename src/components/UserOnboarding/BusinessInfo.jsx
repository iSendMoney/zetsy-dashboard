import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Autocomplete } from "@mui/material";
import { useShopContext } from "../../contexts/Shop";

const options = [
  { label: "Restaurant", value:"Restaurant" },
  { label: "Foods and Average", value: "Foods and Average" },
  { label: "clothing", value: "clothing" },
  { label: "shoes", value: "shoes"  },
];

const noOfEmployees = ["0 - 5", "5 - 10", "10 - 15","15 - 50+"];

const price = [
  "NPR 0 - NPR 50,000",
  "NPR 50,000 - NPR 1,00,000",
  "NPR 1,00,000 - NPR 2,50,000",
];

export default function BusinessInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {

  const [, dispatchShop] = useShopContext();
  const [businessInfo, setBusinessInfo] = React.useState({
    name:"",
    no_of_emp:"",
    estimated_revenue:"",
    category:"",
  })

  const handleSubmitNext = () => {
    dispatchShop({type:"biz-info", payload: businessInfo});
    handleNext();
  }

  return (
    <div className="businessInfo__container">
      <h1>
        <i className="ri-briefcase-line"></i> Business Information
      </h1>
      <form style={{ width: "auto" }}>
        <TextField
          id="outlined-basic"
          label="Business Name"
          variant="outlined"
          onChange={e => setBusinessInfo({...businessInfo, name: e.target.value})}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          className="types"
          x={{ width: "360px !important" }}
          onChange={e=>setBusinessInfo({...businessInfo, category: e.target.innerHTML})}
          renderInput={(params) => (
            <TextField {...params} 
              label="Categories..."
            />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={noOfEmployees}
          onChange={e=>setBusinessInfo({...businessInfo, no_of_emp: e.target.innerHTML})}
          renderInput={(params) => (
            <TextField {...params} 
            label="No of Employees..."
             />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={price}
          onChange={e=>setBusinessInfo({...businessInfo, estimated_revenue: e.target.innerHTML})}
          renderInput={(params) => (
            <TextField {...params} 
            label="Estimated Yearly Revenue..."
             />
          )}
        />
      </form>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          className="backBtn"
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          className="skipBtn"
          color="inherit"
          onClick={handleSkip}
          sx={{ mr: 1 }}
        >
          Skip
        </Button>

        <Button className="nextBtn" onClick={()=> handleSubmitNext()}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
