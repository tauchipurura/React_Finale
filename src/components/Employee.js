import React from 'react'

const Employee = (props) => {
  return (
    <>
    <h3>Employee {props.name}</h3>
    <p>{props.role ? props.role : "No role"}</p>
    
    </>
  )
}

export default Employee