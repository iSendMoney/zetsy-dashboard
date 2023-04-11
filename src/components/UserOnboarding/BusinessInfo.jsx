import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Autocomplete } from "@mui/material";

const options = [
  { label: "Restaurant" },
  { label: "Foods and Average" },
  { label: "clothing" },
  { label: "shoes" },
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
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          x={{ width: "360px !important" }}
          renderInput={(params) => (
            <TextField {...params} label="Categories..." />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={noOfEmployees}
          renderInput={(params) => (
            <TextField {...params} label="No of Employees..." />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={price}
          renderInput={(params) => (
            <TextField {...params} label="Estimated Yearly Revenue..." />
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

        <Button className="nextBtn" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </div>
  );
}
