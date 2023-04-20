export const ACTIONS = {
  THEME: "theme",
};
const defaultTheme =
  localStorage.getItem("zetsy-dashboard-theme") !== ""
    ? localStorage.getItem("zetsy-dashboard-theme")
    : "light";

export const initialUtilityState = {
//   theme: defaultTheme,
    theme: "dark",
};

export const UtilityReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.THEME:
      state.theme = action.payload;
      localStorage.setItem("zetsy-dashboard-theme", action.payload);
      return state;
  }
};
