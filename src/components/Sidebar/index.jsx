import { Button } from "@mui/material";
import { Text } from "@tremor/react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
// import { useActiveDashboard } from "../../contexts/ActiveDashboardPage";
import SidebarItems from "../../utils/Sidebar.json";
import "./styles/style.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // const [activeDashboard, setActiveDashboard] = useActiveDashboard();
  // const navigate = useNavigate();
  // const location = useLocation();

  // const handleActiveDashboard = (dashboard) => {
  //   setActiveDashboard(dashboard);
  // };

  // console.log(location.pathname.match("/").input);
  console.log(location.pathname);

  return (
    <div className="pt-3 desktopLayoutSidebar__container flex flex-col align-start">
      <div className="max-w-sm mx-auto space-y-6 mb-1">
        <SearchSelect>
          <SearchSelectItem value="1">Kilometers</SearchSelectItem>
          <SearchSelectItem value="2">Meters</SearchSelectItem>
          <SearchSelectItem value="3">Miles</SearchSelectItem>
          <SearchSelectItem value="4">Nautical Miles</SearchSelectItem>
        </SearchSelect>
      </div>
      {SidebarItems.map((item, index) => (
        <Button
          key={index}
          className={
            location.pathname === `/${item.actionName}` ? "active" : ""
          }
        >
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "active flex items-center gap-2 w-full"
                : "flex items-center gap-2 w-full"
            }
          >
            <i className={item.icon}></i> <Text>{item.name}</Text>
          </NavLink>
        </Button>
      ))}
    </div>
  );
}
