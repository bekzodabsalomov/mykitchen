import { createContext, useEffect, useMemo, useReducer } from "react";

export const ThemeProvider = createContext();

function stateFromLocaleStorage() {
  return (
    JSON.parse(localStorage.getItem("state")) || {
      color: "pink",
      theme: "dark",
    }
  );
}

const updateState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(updateState, stateFromLocaleStorage());

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  const newSTate = useMemo(() => {
    return state;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(newSTate), [newSTate]);
    document.documentElement.setAttribute(
      "data-theme",
      stateFromLocaleStorage().theme
    );
  });

  return (
    <ThemeProvider.Provider value={{ ...state, changeColor, changeTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
