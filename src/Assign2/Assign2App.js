import React, {Component} from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class Assign2App extends Component{

    state = {
        enteredString : '',
        stringLength : 0
    }

    calculateStringLength = (event) => {
        let enteredString1 = event.target.value;
        this.setState({
            enteredString : enteredString1,
            stringLength : enteredString1.length
        });
    }

    removeThisCharacter = (charIndex) => {
        let localArray1 = this.state.enteredString.split('');
        localArray1.splice(charIndex,1);
        let splicedString= localArray1.join('');
        this.setState({
            enteredString : splicedString,
            stringLength : splicedString.length
        })
    }

    render(){
        let localString = this.state.enteredString.split('');
        let charToDisplay = null;
        charToDisplay = (
            <div>
                {localString.map((char,charIndex) => {
                    return <CharComponent 
                    char = {char}
                    removeThisChar = {() => this.removeThisCharacter(charIndex)}
                    />
                })}
            </div>
        );

        return (
            <div>
                Start Typing: <input type="text" onChange = {this.calculateStringLength} value = {this.state.enteredString}/>
                <p>The length of the string is: {this.state.stringLength} </p>
                <ValidationComponent stringLength={this.state.stringLength}/>
                {charToDisplay}
            </div>
        );
    }
}

export default Assign2App;
