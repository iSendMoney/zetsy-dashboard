import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

export default function BusinessInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {
  return (
    <div className="businessInfo__container">
      <h1><i className="ri-briefcase-line"></i> Business Information</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Business Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Business Category"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="No. of Employees"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Estimated Yearly Revenue"
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
        <Button className="skipBtn" color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
          Skip
        </Button>

        <Button className="nextBtn" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
