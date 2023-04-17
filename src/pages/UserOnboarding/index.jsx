import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles/style.css";
import BusinessInfo from "../../components/UserOnboarding/BusinessInfo";
import CustomerInfo from "../../components/UserOnboarding/CustomerInfo";
import SocialInfo from "../../components/UserOnboarding/SocialInfo";
import { useShopContext } from "../../contexts/Shop";
import axios from "axios";
import { useAuthContext } from "../../contexts/Auth";
import LoadingBar from 'react-top-loading-bar'
import { toast } from "react-toastify";

const steps = [
  "Business Information",
  "Customer Information",
  "Social Information",
];

export default function UserOnboarding({ setHasStore }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [shopData, dispatchShop] = useShopContext();
  const [{accessToken},] = useAuthContext();
  const [loading, setLoading] = React.useState(false);
  const ref = React.useRef(null)

  const isStepOptional = () => {
    return true;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
   
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional()) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(2);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const saveStore = async ()=>{
    try {
    ref.current.continuousStart()
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URI}/api/v1/store/save`,shopData,{
      headers:{
        Authorization: `${accessToken}`
      }
    });
    const {store, message} = response.data;
    dispatchShop({type:"shop", payload: store});
    ref.current.complete()
    toast(message,{
      type:"success"
    })
    setHasStore(true);
    } catch (error) {
      if(error){
        console.log(error.response.data)
        ref.current.complete()
        toast(error.response?.data || "Failed to Create Shop",{
          type:'error'
        })
      }
    }
    
  }

  return (
    <div className="onboardUser__container">
      <div className="overlay">
        <Box sx={{ width: "100%" }} className="paper">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <LoadingBar color="#6c5ce7" ref={ref} shadow={true} height={10} />
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* @note save all those form data in local storage and onclick button send a post request adn remove from local storage */}
                <Button className="resetBtn" onClick={() => saveStore()}>
                  Let's Get Started
                </Button>
              </Box>
            </React.Fragment>
          ) : activeStep === 0 ? (
            <>
              <BusinessInfo
                handleNext={handleNext}
                activeStep={activeStep}
                handleSkip={handleSkip}
                handleBack={handleBack}
                steps={steps}
              />
            </>
          ) : activeStep === 1 ? (
            <>
              <CustomerInfo
                handleNext={handleNext}
                activeStep={activeStep}
                handleSkip={handleSkip}
                handleBack={handleBack}
                steps={steps}
              />
            </>
          ) : (
            <>
              <SocialInfo
                handleNext={handleNext}
                activeStep={activeStep}
                handleSkip={handleSkip}
                handleBack={handleBack}
                steps={steps}
              />
            </>
          )}
        </Box>
      </div>
    </div>
  );
}
