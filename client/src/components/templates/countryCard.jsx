import Link from 'next/link';
import { useDarkMode } from '@/contexts/changeModeContext'; 

const DisplayData = ({ data }) => {
  const { mode } = useDarkMode(); 

  if (!data || !Array.isArray(data)) {
    return <p>No data available</p>;
  }

  return (
    <div className={`grid grid-cols-4 gap-5 m-12 ${mode === 'dark' ? 'bg-dark-mode-primary' : 'bg-light-mode-primary'}`}>
      {data.slice(0, 246).map((country, index) => (
        <div key={index} className={`flex flex-col rounded-lg w-48 h-56 shadow-md ${mode === 'dark' ? 'bg-dark-mode-secondary' : 'bg-white'}`}>
          <Link href={`/country/${country.cca3}`} className="no-underline text-current">
            <div className="w-full h-24 mb-5">
              <img className="w-full h-full rounded-t-lg" src={country.flags} alt={country.name.common} />
            </div>
            <h2 className={`ml-2 mb-2 text-sm font-bold ${mode === 'dark' ? 'text-white' : 'text-dark-mode-text'}`}>{country.name}</h2>
            <p className={`ml-2 mb-1 text-xs font-semibold ${mode === 'dark' ? 'text-white' : 'text-dark-mode-text'}`}>Capital: {country.capital}</p>
            <p className={`ml-2 mb-1 text-xs font-semibold ${mode === 'dark' ? 'text-white' : 'text-dark-mode-text'}`}>Population: {country.population}</p>
            <p className={`ml-2 mb-1 text-xs font-semibold ${mode === 'dark' ? 'text-white' : 'text-dark-mode-text'}`}>Region: {country.region}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
