"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '@/contexts/changeModeContext';

export const CountryDetails = ({ country }) => {
  const { mode } = useDarkMode();

  const nativeName = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]?.common || 'N/A'
    : 'N/A';
  const topLevelDomain = country.tld ? country.tld[0] : 'N/A';
  const currencies = country.currencies 
    ? Object.values(country.currencies).map((currency) => currency.name).join(', ') 
    : 'N/A';
  const borders = country.borders
    ? country.borders.join(', ') 
    : 'N/A';
  const languages = country.languages 
    ? Object.values(country.languages).join(', ') 
    : 'N/A';

  return (
    <>
      <Link to="/"
        className={`text-white ${
          mode === 'dark' ? 'bg-dark-mode-secondary' : 'bg-light-mode-primary'
        } p-2 rounded hover:${
          mode === 'dark' ? 'bg-dark-mode-primary' : 'bg-light-mode-text'
        } transition-colors`} 
    
      >
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-arrow-left"></i> Back
        </div>
      </Link>

      <div
        className={`flex justify-around items-center mt-20 ${
          mode === 'dark' ? 'bg-dark-mode-primary' : 'bg-light-mode-primary'
        } p-8 rounded-lg`}
      >
        <div className="w-1/3 h-3/4">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={country.flags.png}
            alt={country.name.common}
            width={400}
            height={300}
          />
        </div>
        <div className="w-1/3 h-3/4 flex flex-col justify-between text-sm">
          <div>
            <h1
              className={`text-2xl font-bold mb-5 ${
                mode === 'dark' ? 'text-white' : 'text-light-mode-text'
              }`}
            >
              {country.name.common}
            </h1>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Population:</strong> {country.population}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Region:</strong> {country.region}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
          <div className="mt-auto">
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Currencies:</strong> {currencies}
            </p>
            <p
              className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
            >
              <strong>Languages:</strong> {languages}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p
          className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
        >
          <strong>Border Countries :</strong>
        </p>
        <ul className="flex flex-wrap gap-3">
          {borders.split(', ').map((border) => (
            <li
              className={`bg-gray-300 p-2 rounded hover:bg-gray-400 transition-colors ${
                mode === 'dark' ? 'bg-dark-mode-secondary' : 'bg-light-mode-input'
              }`}
              key={border}
            >
              <Link
                href={`/country/${border}`}
                className={mode === 'dark' ? 'text-white' : 'text-light-mode-text'}
              >
                {border}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
