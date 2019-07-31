import React from 'react'

const person = (props) => {
    return (
    <div>
        <p>I am {props.name} and my age is {props.age}!</p>
        <p>{props.children}</p>
         {/* RK-*** The special propery called "Children" is used to access the children of the element*/}
    </div>
    
    )
}

export default person;