export const ACTIONS = {
  LOGIN: "login",
  SET_USER: "set-user",
  SET_AT:"set-accessToken",
  LOGOUT:"logout"
};

export const initialAuthenticationState = {
  authenticated: false,
  user:  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) :{},
  accessToken:localStorage.getItem("authentication-token") ? JSON.parse(localStorage.getItem("authentication-token")).accessToken : ""
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
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
        return {
          ...state,
          user: action.payload,
        };
    case ACTIONS.SET_AT:
      return {
        ...state,
        accessToken: action.payload
      }
    case ACTIONS.LOGOUT:
      localStorage.clear();
        return {
          ...state,
          authenticated: "",
          user: {},
          accessToken: ""
        }
  }
};
