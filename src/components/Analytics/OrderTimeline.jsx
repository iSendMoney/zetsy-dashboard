import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Select campaign settings",
  },
  {
    label: "Create an ad group",
  },
  {
    label: "Create an ad",
  },
  {
    label: "Select campaign settings",
  },
  {
    label: "Create an ad group",
  },
  {
    label: "Create an ad",
  },
];

export default function OrderTimeline() {
  return (
    <div className="ordertimeline__container">
      <h3>Order Timeline</h3>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>🚀 {step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
