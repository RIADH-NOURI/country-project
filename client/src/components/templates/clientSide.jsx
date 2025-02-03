"use client";
import { useState } from "react";
import NavBar from "../organisms/navBar";
import SearchBar from "../molecules/searchBar";
import CountryCards from "./countryCard";

const ClientSide = ({ countries }) => {
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
      <CountryCards data={filteredData} />
    </>
  );
};

export default ClientSide;
