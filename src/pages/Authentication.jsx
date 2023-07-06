import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  /**
   * @dev in any case the user signs out or signs in
   * - Must update the global state for authentication
   * import { getAuth, onAuthStateChanged } from "firebase/auth";

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
   */
} from "firebase/auth";
import { auth } from "../utils/firebase";
import "./styles/authentication.style.css";
import { Button } from "@mui/material";

const provider = new GoogleAuthProvider();

export default function Authentication() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signUpUserWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signInWithGoogle = () => {
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
    // <div>
    //   <h1>Authentication</h1>

    //

    //   <button onClick={() => signUpUserWithEmailPassword()}>Sign Up</button>
    // </div>
    <main className="authentication__container">
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
          {/* <a href="">Forgot Password</a> */}
          <Button onClick={() => authenticateWithEmailAndPassword()}>
            Sign in
          </Button>
          <p className="divider text-sm my-1">Or</p>
          <Button className="flex flex-row gap-2" onClick={() => signInWithGoogle()}><i className="ri-google-line"></i> Google</Button>
        </div>
      </form>
      <img
        className="rounded-lg"
        src="https://ik.imagekit.io/13x54r/Zetsy/Screenshot_2023-07-06_at_1.31.38_AM.png?updatedAt=1688621509219"
        loading="lazy"
        alt=""
      />
    </main>
  );
}
