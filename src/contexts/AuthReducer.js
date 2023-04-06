export const ACTIONS = {
  SET_AUTHENTICATION: "set-authentication",
};

export const initialAuthenticationState = {
  authenticated: false,
};

export const AuthenticationReducer = (state, action) => {
  switch (action.type) {
    // @note set authentication
    case ACTIONS.SET_AUTHENTICATION:
      return {
        ...state,
        authenticated: true,
      };
  }
};
