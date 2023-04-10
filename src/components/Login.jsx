import React from "react";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/Auth";
import axios from "axios";
import { toast } from "react-toastify";
import { sanitizeAuthenticationInput } from "../configs/SanitizeAuthentication";

export default function Login({ setFormStatus, setIsAuthenticated }) {
  const [, dispatch] = useAuthContext();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordType, setPasswordType] = React.useState("password");

  const handleFormStatus = (status) => {
    setFormStatus(status);
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();
    if (sanitizeAuthenticationInput(email, password)) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URI}/api/v1/auth/login`,
          {
            email,
            password,
          }
        );

        dispatch({ type: "login", payload: response.data });
        setIsAuthenticated(true);
      } catch (error) {
        toast("Email or Password is incorrect!");
        console.log(error);
      }
    }
  };

  return (
    <form className="login__container" onSubmit={handleUserLogin}>
      <h1>Sign In.</h1>
      <div className="newuser">
        <p>Don't have an account?</p>
        <p onClick={() => handleFormStatus("register")}>Create One.</p>
      </div>

      <div className="email__container">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="my@awesomemail.me"
        />
      </div>

      <label htmlFor="password">Password</label>
      <div className="password__container">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={passwordType}
          name="password"
          placeholder="secret@123"
        />
        {passwordType === "password" ? (<i onClick={() => {
          setPasswordType("text")
        }} className="ri-eye-off-line"></i>) : (<i onClick={() => {
          setPasswordType("password")
        }} className="ri-eye-line"></i>)}
      </div>

      <p className="forgotButton" onClick={() => handleFormStatus("forgot")}>
        forgot password?
      </p>

      <Button type="submit">Login</Button>

      <div className="divider">
        <div></div>
        <p>Or</p>
        <div></div>
      </div>

      <div className="socialLogin">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/150px-Google_%22G%22_Logo.svg.png"
          loading="lazy"
          alt=""
        />
        <img
          src="https://imgs.search.brave.com/G8j01hT__Dy0scW_XC8gPfClk2CjdyhNVXs1m9jAeyY/rs:fit:700:700:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L2ZhY2Vib29r/LWxvZ28tNS0xLnBu/Zw"
          loading="lazy"
          alt=""
        />
        <img
          src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n"
          loading="lazy"
          alt=""
        />
        <img
          src="https://imgs.search.brave.com/HSqZIViVT05nuvKYi1zxI4wa9U4S0cYVgXJBDNUjowc/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEwMDBs/b2dvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDYv/VHdpdHRlci1Mb2dv/LnBuZw"
          loading="lazy"
          alt=""
        />
      </div>
    </form>
  );
}
