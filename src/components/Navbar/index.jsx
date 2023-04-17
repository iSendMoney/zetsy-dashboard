import { Button } from "@mui/material";
import React from "react";

import "./styles/style.css";
import { useAuthContext } from "../../contexts/Auth";
import { useShopContext } from "../../contexts/Shop";

export default function Navbar() {
  const [{user}, dispatch] = useAuthContext();
  const [{shop},] = useShopContext();

  return (
    <div className="navbar__container">
      <h2>{shop.name || "SS Brothers"}</h2>
      <div>
        <Button><i className="ri-notification-2-line"></i></Button>
        <Button><i className="ri-moon-line"></i></Button>
        <Button><i className="ri-settings-3-line"></i></Button>
        <img src={user.picture || "https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1"} loading="lazy" alt="" />
      </div>
    </div>
  );
}
