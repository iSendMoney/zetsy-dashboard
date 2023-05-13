import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./styles/profile.style.css";
import { Grid, TextInput } from "@tremor/react";
import { Button, TextField } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile({ theme }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`profile__container ${theme}`}>
      <h1 className="text-2xl font-semibold mb-2">Profile</h1>
      <h1 className="text-md mb-5 text-[#rgb(99, 115, 129)]">
        Dashboard - User - Profile
      </h1>

      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="Store" {...a11yProps(1)} />
            <Tab label="Billing" {...a11yProps(2)} />
            <Tab label="Notifications" {...a11yProps(3)} />
            <Tab label="Social Links" {...a11yProps(4)} />
            <Tab label="Change Password" {...a11yProps(5)} />
          </Tabs>
        </Box>

        <TabPanel className="profile" value={value} index={0}>
          <div className="container">
            <div className="paper userImage">
              <div className="wrapper">
                <img
                  src="https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1"
                  alt=""
                />
              </div>
              <p className="text-sm mt-4">
                Allowed *.jpeg, *.jpg, *.png, *.gif
                <br /> max size of 3.1 MB
              </p>
            </div>
            <div className="paper userDetails">
              <Grid numColsMd={2} numColsLg={2} className="gap-6 mb-6">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="State/Region"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Zip/Code"
                  variant="outlined"
                />
              </Grid>

              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                className="w-full"
                multiline
                rows={4}
                defaultValue=""
              />

              <Button className="w-full">Update</Button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Store
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
