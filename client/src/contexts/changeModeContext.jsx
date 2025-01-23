"use client";

import { createContext, useState, useEffect,useContext } from "react";

export const ChangeModeContext = createContext();

export const ChangeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ChangeModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ChangeModeContext.Provider>
  );
};
export const useDarkMode = () => useContext(ChangeModeContext);
