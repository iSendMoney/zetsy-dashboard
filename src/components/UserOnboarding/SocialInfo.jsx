import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";

export default function SocialInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {
  return (
    <div className="socialInformation__container">
      <h1><i className="ri-links-line"></i>Social Information</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Facebook"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Instagram"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Twitter"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Linkedin"
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
