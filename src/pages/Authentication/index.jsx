import React from "react";
import Forgot from "../../components/Forgot";
import Login from "../../components/Login";
import Register from "../../components/Register";

import "./styles/style.css";

export default function Authentication() {
  const [formStatus, setFormStatus] = React.useState("login");
  return (
    <div className="authentication__container">
      <img
        src="https://ik.imagekit.io/jckalabs/Zetsy/Screenshot_from_2023-03-28_22-35-35.png?updatedAt=1680022247413"
        alt=""
        loading="lazy"
      />
      <div className="form__container">
        {formStatus === "login" && <Login setFormStatus={setFormStatus}/>}
        {formStatus === "register" && <Register setFormStatus={setFormStatus}/>}
        {formStatus === "forgot" && <Forgot setFormStatus={setFormStatus}/>}
      </div>
    </div>
  );
}
