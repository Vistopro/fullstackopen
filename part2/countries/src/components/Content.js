import React from 'react'
import Countries from './Countries';


const Content = ({countries, setCountries, selectedCountry, setSelectedCountry, newFilter}) => {


    const countriesToShow =
   countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))


    const showCountry = (country) => {
      setSelectedCountry(country);
    };

    if (selectedCountry) {
      const country = selectedCountry;
      return (
        <div>
        <Countries country = {country}/>
       </div>
      )} else if (countriesToShow.length <= 10 && countriesToShow.length > 1 ) {
      return (
          <div>
        <ul>
          {countriesToShow.map(country => (
            <li key={country.cca3}>{country.name.common}  
            <button onClick={() => showCountry(country)} type="submit">show</button></li>
          ))}
        </ul>
        </div>
      );
    } else if (countriesToShow.length > 10) {
      return ( 
      <div>Too many matches, specify another filter</div>
      )
    } else if (countriesToShow.length === 1){
      return ( 
        <div> <Countries country = {countriesToShow[0]}/></div>
        )
    }
  }


export default Content