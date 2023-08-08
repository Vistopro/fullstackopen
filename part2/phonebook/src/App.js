import React, { useEffect, useState } from 'react'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  console.log('render', persons.length, 'persons')
  
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name.toLowerCase === newName.trim().toLowerCase) && 
    persons.some(person => person.phone !== newPhone.trim())) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one? `)) 
      {
        const personChanged = persons.filter(person => person.name.toLowerCase() === newName.toLowerCase())
        personChanged[0].number = newPhone
        console.log(personChanged)
         personsService
        .changePhone(personChanged[0], personChanged[0].id)
        .then(response => {
          console.log('cambiado')
        })
      }
     } else if ((persons.some(person => person.name === newName.trim()) && 
      persons.some(person => person.phone === newPhone.trim())) ){
        window.alert(newName + ' is already added to phonebook');
  } else if (newName.trim() === '' || newPhone.trim() === '' ){
      window.alert('Please enter a name and phone number');
    } else {
      const newPerson = {
        name: newName,
        number: newPhone,
        id: persons.reduce((max, person) => (person.id > max.id ? person : max), persons[0]).id + 1
      }
        personsService
        .create(newPerson)
          .then(response => {
            console.log('añadido')
          })
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewPhone('')
  };

  const personsToShow = 
    persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  
  const deletePerson = (id) => {
      const personToDelete = persons.find(person => person.id ===id) 
      console.log(personToDelete.id)
      if (window.confirm(`Delete ${personToDelete.name} ?`)) {
        console.log('delete')
        personsService
        .deletePerson(personToDelete.id)
        .then(response => {
          console.log(response)
          setPersons(persons.filter(person => person.id !== personToDelete.id ))
        })
      }
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter = {setNewFilter} />
      <h2>Add a new</h2>
      <PersonsForm newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} addPerson={addPerson} />
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} deletePerson = {deletePerson} />
    </div>
  )
}

export default App
