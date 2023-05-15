// import { useAuthContext } from "../contexts/Auth";

// export async function loginUser(email, password) {}

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
