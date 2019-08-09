import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name : "RK", age:"35"},
      {name : "Anu", age:"33"},
      {name : "Sreehaas", age:"7"},
      {name : "Vaishu", age:"1"}
    ]
  }

  switchNameHandler = () => {
    /*RK-***- To change the state of the component, dont directly access the state property and override it like below.
     DON'T do this ---- this.state.persons[0].name = "Ramakrishna"; This will give a warning like dont mutate the state directly rather use setState. The best way to do this is
     using "setState" method as shown below */
    this.setState({
      persons : [
      {name : "Ramakrishna", age:"35"},
      {name : "Anu", age:"33"},
      {name : "Sreehaas", age:"7"},
      {name : "Vaishu", age:"2"}
    ]});

    //RK-***- this setState method is not defined in local class. This is in Component base class got inherited here.
    //alert("The button was clicked");
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
      {name : "Ramakrishna", age:"35"},
      {name : event.target.value, age:"33"},
      {name : "Sreehaas", age:"7"},
      {name : "Vaishu", age:"2"}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>This is my first react app!!!</h1>
        <button onClick = {this.switchNameHandler}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          changed = {this.nameChangeHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>I am so naughty :)</Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}>I am so Cute :)</Person>
      </div>
      
      //RK*** JSX compiles to below line
      //RK*** JSX can have only one root element
      //React.createElement('div',{className:'App'},React.createElement('h1',{className:'h1css'},'Does this really work?'))
    );
  }
}

export default App;
