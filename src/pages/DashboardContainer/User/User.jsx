import "./styles/style.css";

import { Button } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import UsersTable from "../../../components/User/UsersTable";

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

export default function User() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="user__container">
      <div className="user__container__userListHeader">
        <div>
          <h2>User List</h2>
          <p>Dashboard - User - List</p>
        </div>
        <Button>
          <i className="ri-add-line"></i> <p>New User</p>
        </Button>
      </div>

      <Box className="user__container__userTable" sx={{ width: "100%" }}>
        <Box className="boxHeader">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All (120)" {...a11yProps(0)} />
            <Tab label="Active (60)" {...a11yProps(1)} />
            <Tab label="Banned (10)" {...a11yProps(2)} />
            <Tab label="Admin (5)" {...a11yProps(3)} />
            <Tab label="Reported (12)" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {/* <UsersTable/> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}
