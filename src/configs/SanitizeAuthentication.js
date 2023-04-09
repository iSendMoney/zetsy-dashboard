import { toast } from "react-toastify";

export const sanitizeAuthenticationInput = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    toast("Please enter a valid email address!");
    return false;
  }

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPassword = passwordRegex.test(password);
  if (!isValidPassword) {
    toast("Please enter a valid password!");
    return false;
  }

  return true;
};
