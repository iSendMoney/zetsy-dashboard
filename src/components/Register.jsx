import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { sanitizeAuthenticationInput } from "../configs/SanitizeAuthentication";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Hello from "../configs/Hello";
import { useAuthContext } from "../contexts/Auth";

export default function Register({ setFormStatus, setIsAuthenticated }) {
  const [, dispatch] = useAuthContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [passwordType, setPasswordType] = React.useState("password");
  const handleFormStatus = (status) => {
    setFormStatus(status);
  };

  const [passwordValidation, setPasswordValidation] = React.useState({
    character: false,
    capital: false,
    number: false,
  });

  const handlePasswordValidation = (password) => {
    const capitalRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    if (password.length >= 8 && passwordValidation.character === false) {
      setPasswordValidation({
        ...passwordValidation,
        character: true,
      });
    }
    if (password.length < 8 && passwordValidation.character === true) {
      setPasswordValidation({
        ...passwordValidation,
        character: false,
      });
    }
    if (capitalRegex.test(password) && passwordValidation.capital === false) {
      setPasswordValidation({
        ...passwordValidation,
        capital: true,
      });
    }
    if (!capitalRegex.test(password) && passwordValidation.capital === true) {
      setPasswordValidation({
        ...passwordValidation,
        capital: false,
      });
    }
    if (numberRegex.test(password) && passwordValidation.number === false) {
      setPasswordValidation({
        ...passwordValidation,
        number: true,
      });
    }
    if (!numberRegex.test(password) && passwordValidation.number === true) {
      setPasswordValidation({
        ...passwordValidation,
        number: false,
      });
    }
    if (password.length === 0) {
      setPasswordValidation({
        character: false,
        capital: false,
        number: false,
      });
    }
  };

  const sanitizeRegisterData = () => {
    if (sanitizeAuthenticationInput(email, password?.password)) {
      if (password.password !== password.confirmPassword) {
        toast("Passwords do not match!");
        return false;
      }

      return true;
    } else {
      return false;
    }
  };

  const handleUserRegister = async (e) => {
    e.preventDefault();

    if (sanitizeRegisterData()) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URI}/api/v1/auth/register`,
          {
            email,
            password: password.password,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "* ",
            },
          }
        );

        // console.log(response);
        toast("User verification mail sent!");
        handleFormStatus("login");
      } catch (error) {
        toast("User with that email already exists!");
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
          `${
            import.meta.env.VITE_API_BASE_URI
          }/api/v1/auth/register?social=true`,
          {
            email: userData.email,
            picture: userData.picture,
          }
        )
        .then((res) => {
          const { accessToken, refreshToken } = res.data;
          console.log(accessToken);
          dispatch({ type: "login", payload: { accessToken, refreshToken } });
          dispatch({ type: "set-user", payload: res.data.savedUser });
          return setIsAuthenticated(true);
        })
        .catch((err) => err && toast(err.response?.data?.message));

      // setUser(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="register__container text-base"
      onSubmit={handleUserRegister}
    >
      <Helmet>
        <title>
          Register | Zetsy | Zetsy is a cutting-edge ecommerce platform that is
          changing the way people shop online.
        </title>
      </Helmet>
      <h1 className="text-4xl">Sign Up.</h1>
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
          onChange={(e) => {
            setPassword((state) => {
              return { ...state, password: e.target.value };
            });
            handlePasswordValidation(e.target.value);
          }}
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

      <p className="forgotButton">
        <span className={`${passwordValidation.character && "valid"}`}>
          Must be 8 characters long.
        </span>
        <br />
        <span className={`${passwordValidation.capital && "valid"}`}>
          Must contain a capital character.
        </span>
        <br />
        <span className={`${passwordValidation.number && "valid"}`}>
          Must have one number included.
        </span>
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
          src="https://imgs.search.brave.com/ij3t5KLpcnSaGFABUAAdPh9IARp5fsbQSBZBRQC7UWE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvR2l0SHVi/X2xvZ28ucG5n"
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
