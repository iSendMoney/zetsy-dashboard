import React from "react";
import { Button } from "@mui/material";

export default function Forgot({ setFormStatus }) {
  const handleFormStatus = (status) => {
    setFormStatus(status);
  };

  return (
    <form className="forgot__container text-base" action="">
      <h1 className="text-4xl">Zetsy.</h1>
      <div className="newuser">
        <p>Already have an account?</p>
        <p onClick={() => handleFormStatus("login")}>Login</p>
      </div>

      <div className="email__container">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="my@awesomemail.me" />
      </div>

      <div className="email__container">
        <label htmlFor="otp">OTP</label>
        <input name="otp" type="text" placeholder="XXXXXX" />
      </div>

      <label htmlFor="password">Password</label>
      <div className="password__container">
        <input type="password" name="password" placeholder="secret@123" />
        <i className="ri-eye-off-line"></i>
      </div>

      <label htmlFor="password">Confirm Password</label>
      <div className="password__container">
        <input type="password" name="password" placeholder="secret@123" />
        <i className="ri-eye-off-line"></i>
      </div>

      <div className="newuser">
        <p>Don't have an account?</p>
        <p onClick={() => handleFormStatus("register")}>Create One.</p>
      </div>

      <Button>Recover</Button>
    </form>
  );
}
