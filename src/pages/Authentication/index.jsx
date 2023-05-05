import React from "react";
import Forgot from "../../components/Forgot";
import Login from "../../components/Login";
import Register from "../../components/Register";
import { useUtilityContext } from "../../contexts/Utilities";
import "./styles/style.css";

export default function Authentication({setIsAuthenticated}) {
  const [formStatus, setFormStatus] = React.useState("login");
  const [{theme}] = useUtilityContext();

  return (
    <div className={`authentication__container  ${theme}`}>
      <img
        src="https://ik.imagekit.io/jckalabs/Zetsy/Screenshot_from_2023-03-28_22-35-35.png?updatedAt=1680022247413"
        alt=""
        loading="lazy"
      />
      <div className="form__container">
        {formStatus === "login" && <Login theme={theme} setIsAuthenticated={setIsAuthenticated} setFormStatus={setFormStatus}/>}
        {formStatus === "register" && <Register setIsAuthenticated={setIsAuthenticated} setFormStatus={setFormStatus}/>}
        {formStatus === "forgot" && <Forgot setFormStatus={setFormStatus}/>}
      </div>
    </div>
  );
}
