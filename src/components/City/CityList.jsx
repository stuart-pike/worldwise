import Spinner from "../Spinner/Spinner";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "../Message/Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="add your first city, click on the map." />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
