import React from 'react';

const Persons = ({personsToShow, deletePerson}) => {
    


  return (
      <div>
<ul>
      {personsToShow.map(
        person => (
        <li key={person.id}>{person.name} {person.phone}
        <button onClick={() => deletePerson(person.id)}>delete</button></li>
      )
      )}
    </ul>
      </div>
  )
}

export default Persons