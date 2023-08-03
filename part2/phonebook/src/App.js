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
        personsService
        .create(newPerson)
          .then(response => {
            console.log(response)
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
      console.log(personToDelete.name)
      if (window.confirm(`Delete ${personToDelete.name} ?`)) {
        console.log('delete')
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
