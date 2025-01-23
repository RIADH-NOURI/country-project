import axios from "axios";
import { CountryDetails } from "@/components/templates/countryDetails";
import { fetchCountryData } from "@/lib/fetchcountries";



const DisplayData = async({params}) => {
  const {cca3} = params;
  const country = await fetchCountryData(cca3);

  if (!country) {
    return <div className="text-center text-xl">Loading...</div>;
  }  
  return (
    <>
      <CountryDetails country={country} />
    </>
  );
}

export default DisplayData;
