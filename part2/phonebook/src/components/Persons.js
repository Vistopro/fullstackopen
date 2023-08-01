import React from 'react';

const Persons = (props) => {
    
  return (
      <div>
<ul>
      {props.personsToShow.map(
        person => (
        <li key={person.id}>{person.name} {person.phone}</li>
      )
      )}
    </ul>
      </div>
  )
}

export default Persons