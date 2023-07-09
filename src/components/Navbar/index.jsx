import { Button } from "@mui/material";
import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import { userSignOut } from "../../utils/authentication";
import "./styles/style.css";
import { Text } from "@tremor/react";

export default function Navbar() {
  const [AvatarAnchorEl, setAvatarAnchorEl] = React.useState(null);
  const handleAvatarPopoverClick = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };
  const handleAvatarPopoverClose = () => {
    setAvatarAnchorEl(null);
  };
  const avatarPopeverOpen = Boolean(AvatarAnchorEl);
  const avatarPopeverId = open ? "avatar-popover" : undefined;

  const [search, setSearch] = React.useState("");

  return (
    <nav className="flex flex-row justify-between align-center px-6 py-2 text-sm">
      <p className="text-2xl logo">Zetsy.</p>
      <div className="navbarSearchContainer flex flex-row align-center gap-2 border p-2 rounded">
        <Text><i className="ri-search-line"></i></Text>
        <input type="text" placeholder="Search" />
        <Text><i className="ri-command-line"></i>+K</Text>
      </div>
      <div className="flex flex-row align-center gap-2">
        <Button>
          <Badge badgeContent={1} color="primary">
            <i className="ri-notification-3-fill text-lg"></i>
          </Badge>
        </Button>
        <Avatar
          aria-describedby={avatarPopeverId}
          variant="contained"
          onClick={handleAvatarPopoverClick}
          alt="Remy Sharp"
          className="cursor-pointer"
          src="https://images.unsplash.com/photo-1688378911966-ff12184b2680?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        />
        <Popover
          id={avatarPopeverId}
          open={avatarPopeverOpen}
          anchorEl={AvatarAnchorEl}
          onClose={handleAvatarPopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="flex flex-col"><Button onClick={() => userSignOut()}>Profile</Button>
          <Button onClick={() => userSignOut()}>Sign Out</Button></div>
        </Popover>
      </div>
    </nav>
  );
}
