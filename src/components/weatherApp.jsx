import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm.jsx";
import WeatherMainInfo from "./weatherMainInfo.jsx";
import styles from './weatherApp.module.css'

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "Panamá") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}key=${
          import.meta.env.VITE_APP_KEY
        }&q=${city}&aqi=no`
      );

      const json = await request.json();

      setWeather(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        <WeatherMainInfo weather={weather}/>
       
      </div>
    </>
  );
}
