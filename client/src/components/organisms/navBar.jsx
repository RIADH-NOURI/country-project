"use client"
import { useState } from "react";
import { useDarkMode } from "@/contexts/changeModeContext";


const NavBar = ({ handleRegionFilter }) => {
    const { mode} = useDarkMode();
  const [NavBar, setnavbar] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const handeclicked = () => {
    setnavbar(!NavBar);
  };

  const handleRegionClick = (region) => {
    handleRegionFilter(region);
    setActiveRegion(region);
  };
  return (
    <div
      className={`relative ml-[80%] mt-[-30px] w-[120px] z-[1] ${
        mode === "light" ? "bg-light-mode-primary shadow-lg shodow-black text-light-mode-text" : "bg-dark-mode-secondary shadow-lg shodow-white text-white"
      }`}
    >
      <div
        className={`flex items-center justify-between p-2 mb-2 shadow-sm text-[0.6em] font-semibold rounded-sm ${
        mode === "light" ? "bg-light-mode-primary" : "bg-dark-mode-secondary"
        }`}
      >
        Filter by Region
        <button
          className={`bg-none border-none cursor-pointer text-[0.5rem] ${
            mode === "light" ? "text-light-mode-text" : "text-white"
          }`}
          onClick={handeclicked}
        >
          <i
            className={`fa-solid fa-chevron-down transition-transform ml-2 ${
              NavBar ? "rotate-180" : ""
            }`}
          ></i>
        </button>
      </div>
      <div
        className={`absolute overflow-hidden transition-all duration-500 w-[120px] rounded-sm shadow-sm ${
          mode === "light" ? "bg-light-mode-primary" : "bg-dark-mode-secondary"
        } z-[-1] ${NavBar ? "h-[130px]" : "h-0"}`}
      >
        <ul className="list-none m-0 p-0">
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
           <li
           key={region}
           className={`p-2 cursor-pointer text-[0.7em] font-semibold transition-all duration-300 ease-out hover:bg-dark-mode-light hover:text-white dark:hover:bg-dark-mode-primary dark:hover:text-white ${
             activeRegion === region
               ? "bg-dark-mode-background text-white dark:bg-dark-mode-primary dark:text-white"
                : ""
           }`}
            onClick={() => handleRegionClick(region)}
          >
              {region}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
