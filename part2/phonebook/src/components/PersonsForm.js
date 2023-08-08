import React from 'react'

const PersonsForm = (props) => {
      
  
  const handleNameChange = (event) => {
    props.setNewName(event.target.value)
  };

  const handlePhoneChange = (event) => {
    props.setNewPhone(event.target.value)
  };

  return (
      <div>
  <form>
  <div>
    name: <input value={props.newName} onChange={handleNameChange}/>
    <div>
      number: <input value={props.newPhone} onChange={handlePhoneChange} /></div>
  </div>
  <div>
    <button onClick={(event) => props.addPerson(event)} type="submit" >add</button>
  </div>     
  </form>

      </div>

  )
}

export default PersonsForm