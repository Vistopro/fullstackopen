import React, { useState } from 'react'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345',  id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName.trim())) {
      window.alert(newName + ' is already added to phonebook');
    }
    else if (newName.trim() === '' || newPhone.trim() === '' )
    {
      window.alert('Please enter a name and phone number');
    }
    else {
      const newPerson = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewPhone('')
  };

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter = {setNewFilter} />
      <h2>Add a new</h2>
      <PersonsForm newName={newName} newPhone={newPhone} setNewName={setNewName} setNewPhone={setNewPhone} addPerson={addPerson} />
      <h2>Numbers</h2>
        <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
