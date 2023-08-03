import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter';
import Content from './components/Content';

const App = () =>{
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [newFilter, setNewFilter] = useState('')

   useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])


  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

   return (
    <div>
      <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange}/>
      <Content countries = {countries} setCountries = {setCountries} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} newFilter = {newFilter}/>
    </div>
  )
}


export default App;
