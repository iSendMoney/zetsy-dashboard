import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useShopContext } from "../../contexts/Shop";

export default function CustomerInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {
  const [, dispatch] = useShopContext();

  const [customerInfo, setCustomerInfo] = React.useState({
    target_audience:"",
    target_location:"",
    target_age_group:"",
    target_gender:"",
  })

  const handleSubmitNext = ()=>{
    dispatch({type:"customer-info", payload: customerInfo});
    handleNext();
  }

  return (
    <div className="customerInformation__container">
      <h1><i className="ri-store-2-line"></i> Customer Information</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Target Audience"
          variant="outlined"
          onChange={e => setCustomerInfo({...customerInfo, target_audience: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Target Location"
          variant="outlined"
          onChange={e => setCustomerInfo({...customerInfo, target_location: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Target Age Group"
          variant="outlined"
          onChange={e => setCustomerInfo({...customerInfo, target_age_group: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Target Gender"
          variant="outlined"
          onChange={e => setCustomerInfo({...customerInfo, target_gender: e.target.value})}
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

        <Button className="nextBtn" onClick={handleSubmitNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
