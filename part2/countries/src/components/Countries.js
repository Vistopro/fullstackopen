import React, { useEffect, useState } from "react"
import axios from 'axios'



const Countries = ({country}) => {

  const [weather, setWeather] = useState([])
      
  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.name.common
    }

    axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        console.log(response.data)
        console.log(`Current temperature in ${response.data.location.name} is ${response.data.current.temperature}℃`);
        setWeather([response.data])
      }).catch(error => {
        console.log(error);
    })
  })

    return(
        <div>
          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h2>Languages</h2>
          <ul>
            {Object.entries(country.languages).map(([code, name]) => (
              <li key={code}>{name}</li>
            ))}
          </ul>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <h2>Weather in {country.name.common}</h2>
          <p>Temperature: {weather.temperature} Celsius</p>
          <img src={weather.weather_icons} alt="Weather icon"></img>
        <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
    )

}

export default Countries