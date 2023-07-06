import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./styles/authentication.style.css";
import Forgot from "./components/Forgot";

export default function Authentication() {
  const [formStatus, setFormStatus] = React.useState("login");

  const handleFormStatus = (_status) => {
    setFormStatus(_status);
  };

  return (
    <main className="authentication__container">
      {formStatus === "login" ? (
        <Login handleFormStatus={handleFormStatus} />
      ) : formStatus === "signup" ? (
        <Signup handleFormStatus={handleFormStatus} />
      ): formStatus === "forgotPassword" && <Forgot handleFormStatus={handleFormStatus}/>}
      <img
        className="rounded-lg"
        src="https://ik.imagekit.io/13x54r/Zetsy/Landing.png?updatedAt=1688659191461"
        loading="lazy"
        alt=""
      />
    </main>
  );
}
