import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext(null);

export const useDarkMode = () => {
  const ctx = useContext(DarkModeContext);
  if (!ctx) throw new Error("useDarkMode must be inside DarkModeProvider");
  return ctx;
};

export const DarkModeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const toggle = () => setDark(d => !d);

  return (
    <DarkModeContext.Provider value={{ dark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;