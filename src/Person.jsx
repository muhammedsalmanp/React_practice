import React from 'react'

function Person({persons}) {
 return (
    <div >
      <h3>I am{persons.name}, {persons.age}years old i Know {persons.skill} </h3>
    </div>
  )
}

export default Person
