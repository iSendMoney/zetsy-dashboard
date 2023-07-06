import React from "react";
import { Button } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

const provider = new GoogleAuthProvider();

export default function Login({handleFormStatus}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signInUserWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user, token);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const authenticateWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <form action="" className="p-[5vw]">
      <div className="inputContainer">
        <h1 className="text-3xl font-medium">Welcome Back 👋</h1>
        <p className="my-4 font-thin">
          Today is a new day. It's your day. You shape it.
          <br /> Sign in to start managing your business.
        </p>
        <label htmlFor="">Email</label>
        <input
          className="text-sm"
          type="email"
          placeholder="Example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="text-sm"
          type="password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-sm mb-2 text-right cursor-pointer" onClick={() => handleFormStatus("forgotPassword")}>
          Forgot Password.
        </p>
        <Button onClick={() => authenticateWithEmailAndPassword()}>
          Sign in
        </Button>
        <p className="divider text-sm my-1">Or</p>
        <Button
          className="flex flex-row gap-1 social"
          onClick={() => signInUserWithGoogle()}
        >
          <i className="ri-google-fill"></i> Google
        </Button>
        <p className="text-sm mt-2 text-center">
          Don't have an account?{" "}
          <span
            className="cursor-pointer"
            onClick={() => handleFormStatus("signup")}
          >
            Sign Up
          </span>
        </p>
        <p className="text-xs font-thin text-center mt-5">
          Copyright &copy; Zetsy. All Rights Reserved.
        </p>
      </div>
    </form>
  );
}
