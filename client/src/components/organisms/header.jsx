"use client"
import { useDarkMode } from "@/contexts/changeModeContext";

const Header = () => {
  const { mode, toggleMode } = useDarkMode();

  return (
    <header
      className={`flex items-center justify-between mb-12 px-12 h-16 shadow-md transition duration-300 ${
    mode === "light" ? "bg-light-mode-primary text-light-mode-text" : "bg-dark-mode-secondary text-white"
      }`}
    >
      <div className="text-lg font-extrabold">Where in the world?</div>
      <div
        className="flex items-center cursor-pointer font-semibold"
        onClick={toggleMode}
      >
        <i className="fa-regular fa-moon mr-2"></i>
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </div>
    </header>
  );
};

export default Header;
