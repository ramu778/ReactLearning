import React, {Component} from 'react';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import './Assign1.css'

class Assign1App extends Component {

    state = {
        username:'HareRamHareKrishna'
    }

    userNameChangeHandler = (event) => {
        this.setState({
            username:event.target.value
        });
    }

    render(){
        return (
            <div className ="assign1">
                <UserOutput username={this.state.username}/>
                <UserOutput/>
                <UserOutput/>
                <UserOutput/>
                <UserInput userName={this.state.username} usernameChange={this.userNameChangeHandler}/>
                </div>
        )
    }
}

export default Assign1App;