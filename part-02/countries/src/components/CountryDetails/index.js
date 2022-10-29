import axios from "axios";
import { useEffect, useState } from "react";
import "./country-details.css";

function CountryDetails({ country }) {
  const [weather, setWeather] = useState();

  const [lat, long] = country.capitalInfo.latlng;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_OW_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      });
  }, [lat, long]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        <b>{country.capital.length > 1 ? "capitals" : "capital"}: </b>
        {country.capital.join(", ")}
      </p>
      <p>
        <b>area: </b>
        {country.area}
      </p>
      <b>languages:</b>
      <ul>
        {Object.entries(country.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <img
        className="flag"
        src={country.flags.svg}
        alt={`${country.name.common}'s flag`}
      />
      {weather && (
        <>
          <h2>Weather in {country.capital}</h2>
          <p>
            <b>Temperature: </b>
            {weather.main.temp} Celcius
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={`${weather.weather.description}`}
          />
          <p>
            <b>Wind: </b>
            {weather.wind.speed} m/s
          </p>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
