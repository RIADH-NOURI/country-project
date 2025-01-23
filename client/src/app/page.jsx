"use client"

import NavBar from "@/components/organisms/navBar";
import SearchBar from "@/components/molecules/searchBar";
import CountryCards from "@/components/templates/countryCard";
import { fetchCountriesData } from "@/lib/fetchcountries";


const  ClientSide = ({ countries })=> {
  const [region, setRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });

  const handleRegionFilter = (region) => {
    setRegion(region);
  };

  const handleSearchTermChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <NavBar handleRegionFilter={handleRegionFilter} />
      <SearchBar handleSearch={handleSearchTermChange} />
      <CountryCards countries={filteredData} />
    </>
  );
}


const Page = async()=> {
  const countries = await fetchCountriesData();

  return (
    <ClientSide countries={countries} />
  );
}

export default Page;

