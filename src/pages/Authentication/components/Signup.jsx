import React from "react";
import { Button } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();

export default function Signup({ handleFormStatus }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const signUpUserWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user).then(() => {
          toast("Email verification sent!");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        toast("User already exists!")
      });
  };

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
        <label htmlFor="">Confirm Password</label>
        <input
          className="text-sm"
          type="password"
          placeholder="At least 8 characters"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          className="flex flex-row gap-1"
          onClick={() => signUpUserWithEmailPassword()}
        >
          Sign up
        </Button>
        <p className="divider text-sm my-1">Or</p>
        <Button
          className="flex flex-row gap-1 social"
          onClick={() => signInUserWithGoogle()}
        >
          <i className="ri-google-fill"></i> Google
        </Button>
        <p className="text-sm mt-2 text-center">
          Already an account?{" "}
          <span
            className="cursor-pointer"
            onClick={() => handleFormStatus("login")}
          >
            Login instead.
          </span>
        </p>
        <p className="text-xs font-thin text-center mt-5">
          Copyright &copy; Zetsy. All Rights Reserved.
        </p>
      </div>
    </form>
  );
}
