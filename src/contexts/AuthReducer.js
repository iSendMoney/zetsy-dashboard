export const ACTIONS = {
  LOGIN: "login",
};

export const initialAuthenticationState = {
  authenticated: false,
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
  }
};
