export const ACTIONS = {
  LOGIN: "login",
  SET_USER: "set-user"
};

export const initialAuthenticationState = {
  authenticated: false,
  user:  sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) :{}
};

export const AuthenticationReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      localStorage.setItem(
        "authentication-token",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        authenticated: true,
      };
    case ACTIONS.SET_USER:
      sessionStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
        return {
          ...state,
          user: action.payload,
        };
  }
};
