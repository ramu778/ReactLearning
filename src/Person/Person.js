import React from 'react'
import './Person.css'

const person = (props) => {
    return (
    <div className="person">
        <p>I am {props.name} and my age is {props.age}!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} defaultValue = {props.name}/>
         {/* RK-*** The special propery called "Children" is used to access the children of the element*/}
    </div>
    
    )
}

export default person;