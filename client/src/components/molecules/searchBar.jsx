
import { useDarkMode } from '@/contexts/changeModeContext';

const Search = ({ handleSearch }) => {
  const { mode } = useDarkMode();

  const handleInputChange = (event) => {
    const value = event.target.value || ""; 
    handleSearch(value);
  };

  return (
    <>
      <div className={`flex items-center ml-12 w-72 p-2 rounded shadow-lg ${mode === "light" ? "bg-light-mode-primary" :"bg-dark-mode-secondary" }`}>
        <button className={`bg-transparent border-none mr-5 text-sm outline-none cursor-pointer ${mode === "light" ? "text-light-mode-input" : "text-white"}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          onChange={handleInputChange} 
          className={`w-full bg-transparent border-none text-sm outline-none ${mode === "light" ? "text-light-mode-input" : "text-white"}`}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
};

export default Search;
