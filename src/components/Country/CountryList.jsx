import Spinner from "../Spinner/Spinner";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "../Message/Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city, click on the map." />;

  const countriesUnique = new Set(
    cities.map((city) =>
      JSON.stringify({ country: city.country, emoji: city.emoji })
    )
  );
  const countries = [...countriesUnique].map((each) => JSON.parse(each));

  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.emoji} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
