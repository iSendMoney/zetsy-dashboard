export const ACTIONS = {
  THEME: "theme",
};

export const initialUtilityState = {
  theme:
    localStorage.getItem("zetsy-dashboard-theme") !== null
      ? localStorage.getItem("zetsy-dashboard-theme")
      : "light",
  //   theme: "dark",
};

export const UtilityReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.THEME:
        console.log("theme action");
      const theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("zetsy-dashboard-theme", theme);
      return {...state, theme};
  }
};
