import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id:1, name: "Loreum", age: "30" },
      {id:2, name: "Ipsum", age: "28" },
      {id:3, name: "John", age: "7" },
      {id:4, name: "Kutty", age: "1" }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    /*RK-***- To change the state of the component, dont directly access the state property and override it like below.
     DON'T do this ---- this.state.persons[0].name = "Ramakrishna"; This will give a warning like dont mutate the state directly rather use setState. The best way to do this is
     using "setState" method as shown below */
    this.setState({
      persons: [
        { name: "Loreum", age: "30" },
        { name: "Ipsum", age: "28" },
        { name: "John", age: "7" },
        { name: "Kutty", age: "2" }
      ]
    });

    //RK-***- this setState method is not defined in local class. This is in Component base class got inherited here.
    //alert("The button was clicked");
  }

  nameChangeHandler = (event, id) => {
    let personsCopy = [...this.state.persons];
    let personIndex = personsCopy.findIndex((p=>p.id === id));
    personsCopy[personIndex].name = event.target.value;

    this.setState({
      persons: personsCopy
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;
    //This is an example for showing content conditionally.
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* This is the example to show the lists */}
          {this.state.persons.map(person => {
            return <Person 
                    name={person.name} 
                    age={person.age} 
                    key = {person.id}
                    changed = {(event)=>this.nameChangeHandler(event,person.id)}
                    />
          })}
          {/* 
          This is an hard coded way of displaying the data.
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>I am so naughty :)</Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}>I am so Cute :)</Person> */}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>This is my first react app!!!</h1>
        {/* <button onClick = {this.switchNameHandler}>Switch name</button> */}
        <button onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
      
      //RK*** JSX compiles to below line
      //RK*** JSX can have only one root element
      //React.createElement('div',{className:'App'},React.createElement('h1',{className:'h1css'},'Does this really work?'))
    );
  }
}

export default App;
