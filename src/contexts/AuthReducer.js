export const ACTIONS = {
  LOGIN: "login",
};

export const initialAuthenticationState = {
  authenticated: false,
};

export const AuthenticationReducer = (state, action) => {
  switch (action.type) {
    // @note set authentication
    case ACTIONS.LOGIN:
      return {
        ...state,
        authenticated: true,
      };
  }
};
