import React from "react";
import { Button } from "@mui/material";
import { registerUser } from "../api/auth";

export default function Register({ setFormStatus }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const handleFormStatus = (status) => {
    setFormStatus(status);
  };

  const handleUserRegister = (e) => {
    e.preventDefault();
    // @note need to validate whether the password is valid or not, simply input validation and sanitization
    registerUser(email, passowrd?.password)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form className="register__container" onSubmit={handleUserRegister}>
      <h1>Sign Up.</h1>
      <div className="newuser">
        <p>Already have an account?</p>
        <p onClick={() => handleFormStatus("login")}>Login</p>
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
          value={password.password}
          onChange={(e) =>
            setPassword((state) => {
              return { ...state, password: e.target.value };
            })
          }
          type="password"
          name="password"
          placeholder="secret@123"
        />
        <i className="ri-eye-off-line"></i>
      </div>

      <label htmlFor="password">Confirm Password</label>
      <div className="password__container">
        <input
          value={password.confirmPassword}
          onChange={(e) =>
            setPassword((state) => {
              return {
                ...state,
                confirmPassword: e.target.value,
              };
            })
          }
          type="password"
          name="password"
          placeholder="secret@123"
        />
        <i className="ri-eye-off-line"></i>
      </div>

      <p className="forgotButton">
        Must be 8 characters long.
        <br />
        Must Contain a capital character.
        <br />
        Must have one number included.
      </p>

      <Button type="submit">Register</Button>

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
