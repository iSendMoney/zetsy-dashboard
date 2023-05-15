import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useShopContext } from "../../contexts/Shop";

export default function SocialInfo({
  handleNext,
  handleBack,
  handleSkip,
  activeStep,
  steps,
}) {
  const [data, dispatch] = useShopContext();
  console.log(data);
  const [socialInfo, setSocialInfo] = React.useState({
    facebook:"",
    instagram:"",
    twitter:"",
    linkedin:"",
  })

  const handleSubmitNext = ()=>{
    dispatch({type:"social-info", payload: socialInfo});
    handleNext();
  }

  return (
    <div className="socialInformation__container">
      <h1><i className="ri-links-line"></i>Social Information</h1>
      <form>
        <TextField
          id="outlined-basic"
          label="Facebook"
          type="url"
          variant="outlined"
          onChange={e => setSocialInfo({...socialInfo, facebook: e.target.value})}
        />
        <TextField
          id="outlined-basic"
          label="Instagram"
          type="url"
          variant="outlined"
          onChange={e => setSocialInfo({...socialInfo, instagram: e.target.value})}

        />
        <TextField
          id="outlined-basic"
          label="Twitter"
          type="url"
          variant="outlined"
          onChange={e => setSocialInfo({...socialInfo, twitter: e.target.value})}

        />
        <TextField
          id="outlined-basic"
          label="Linkedin"
          type="url"
          variant="outlined"
          onChange={e => setSocialInfo({...socialInfo, linkedin: e.target.value})}

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
