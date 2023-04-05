import { useContext } from "react";
import { useHistory } from "react-router-dom";

export async function loginUser(email, password) {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const response = await fetch(`${import.meta.env.VITE_API_BASE_URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.ok) {
    const { token, refreshToken } = response.data;
    // dispatch({ type: "LOGIN", payload: { token, refreshToken } });
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    history.push("/dashboard");
  } else {
    throw new Error("Login failed.");
  }
}

export async function registerUser(email, password) {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URI}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Registration failed.");
  }
}
