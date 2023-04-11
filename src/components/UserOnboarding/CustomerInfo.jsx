import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

export default function CustomerInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {
  return (
    <div className="customerInformation__container">
      <h1><i className="ri-store-2-line"></i> Customer Information</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Target Audience"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Target Location"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Target Age Group"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Target Gender"
          variant="outlined"
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

        <Button className="nextBtn" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
