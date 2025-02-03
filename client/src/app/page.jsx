import ClientSide from "@/components/templates/clientSide";
import { fetchCountriesData } from "@/lib/fetchcountries";


const Page = async()=> {
  const countries = await fetchCountriesData();
  return (
    <ClientSide countries={countries} />
  );
}

export default Page;

