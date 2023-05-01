import React from "react";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/Auth";
import axios from "axios";
import { toast } from "react-toastify";
import { sanitizeAuthenticationInput } from "../configs/SanitizeAuthentication";
import { Helmet } from "react-helmet";
import Hello from "../configs/Hello";

export default function Login({ setFormStatus, setIsAuthenticated, theme }) {
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
          },
          {
            headers:{
              "Access-Control-Allow-Origin": "* "
            }
          }
        );
        const { accessToken, refreshToken } = response.data;
        dispatch({ type: "login", payload: { accessToken, refreshToken } });
        dispatch({ type: "set-user", payload: response.data.user });
        dispatch({ type: "set-accessToken", payload: accessToken });
        setIsAuthenticated(true);
      } catch (error) {
        toast("Email or Password is incorrect!");
        console.log(error);
      }
    }
  };

  const register = async (provider) => {
    try {
      const oauth = await Hello(provider).login({ scope: "email" });
      let headers = {};
      if (provider == "github") {
        headers = { Authorization: `token ${oauth.authResponse.access_token}` };
      }
      const userData = await Hello(provider).api({
        path: "me",
        headers: headers,
      });
      // Check if user already exists
      await axios
        .post(
          `${import.meta.env.VITE_API_BASE_URI}/api/v1/auth/login?social=true`,
          {
            email: userData.email,
            picture: userData.picture,
          }
        )
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          dispatch({ type: "login", payload: { accessToken, refreshToken } });
          dispatch({ type: "set-user", payload: res.data.user });
          return setIsAuthenticated(true);
        })
        .catch((err) => err && toast(err.response?.data?.message));

      // setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login__container" onSubmit={handleUserLogin}>
      <Helmet>
        <title>
          Login | Zetsy | Zetsy is a cutting-edge ecommerce platform that is
          changing the way people shop online.
        </title>
      </Helmet>
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
        {passwordType === "password" ? (
          <i
            onClick={() => {
              setPasswordType("text");
            }}
            className="ri-eye-off-line"
          ></i>
        ) : (
          <i
            onClick={() => {
              setPasswordType("password");
            }}
            className="ri-eye-line"
          ></i>
        )}
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
          onClick={() => register("google")}
          alt=""
        />
        <img
          src="https://imgs.search.brave.com/G8j01hT__Dy0scW_XC8gPfClk2CjdyhNVXs1m9jAeyY/rs:fit:700:700:1/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA5L2ZhY2Vib29r/LWxvZ28tNS0xLnBu/Zw"
          loading="lazy"
          alt=""
          onClick={() => register("facebook")}
        />
        <img
          src={
            theme === "dark"
              ? "https://imgs.search.brave.com/VYb13ykYaeVS0vqHjNvk4lfztKRn-CT_iICEFG8o5C0/rs:fit:256:256:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvZ2l0aHViLWxv/Z28tcG5nLXdoaXRl/LWdpdGh1Yi0xMS1p/Y29uLWZyZWUtd2hp/dGUtc29jaWFsLWlj/b25zLTI1NngyNTYu/cG5n"
              : "https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n"
          }
          loading="lazy"
          alt=""
          onClick={() => register("github")}
        />
        <img
          src="https://imgs.search.brave.com/HSqZIViVT05nuvKYi1zxI4wa9U4S0cYVgXJBDNUjowc/rs:fit:1200:1200:1/g:ce/aHR0cDovLzEwMDBs/b2dvcy5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDYv/VHdpdHRlci1Mb2dv/LnBuZw"
          loading="lazy"
          alt=""
          onClick={() => register("twitter")}
        />
      </div>
    </form>
  );
}
