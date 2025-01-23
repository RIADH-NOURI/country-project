
import axios from "axios";

export const fetchCountriesData = async () => {
  try {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    return res.data.map((country) => ({
      name: country.name.common,
      capital: country.capital ? country.capital[0] : "N/A",
      region: country.region,
      population: country.population,
      flags: country.flags.png,
      cca3: country.cca3,
    }));
  } catch (error) {
    console.error("Error fetching countries data:", error);
    return [];
  }
};
export const fetchCountryData = async (cca3) => {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
    const country = res.data[0];
    console.log("Country data:", country);
    return country;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}
