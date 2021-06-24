import './App.css';
import React, { Component } from 'react';
import UserProfileCard from './UserProfileCard'
import Table from './table'
import Form from './form'
import DataExample from './dataApiExample'
import Clock from './clock'
import Hooks from'./Hooks'

class App extends Component {

  constructor(){
    super();
    this.state = {
      characters: []
    } 
  }
  
  removeCharacter = (index) =>{
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
            return i !== index;
      })
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters:[...this.state.characters, character]
    })
  }

  render(){ 
    const {characters} = this.state;
    const user = {
      firstName: 'John',
      lastName:'Smith'
    }

    function elemUser(user){
      return user.firstName + user.lastName
    }


   function BorderStyle (props) {
       return(
          <div className={'border border-' + props.color}>
            {props.children}
          </div>
       )
   }

    return (

      <div className="App">

        <UserProfileCard/>
              <BorderStyle color="pink">
        <Table characterData = {characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
        <hr></hr>
        <h2>
          Api fetch example
        </h2>
        <DataExample/>
        <h2>Clock Cmp:-</h2>
        <Clock />
        <h2>Name</h2>
        <div>
          {elemUser(user)}
        </div> 

        <h2>
        conditional rendring
        </h2>

        <Hooks/>

       <conditional/>
       </BorderStyle>
      </div>


 
    );
  }
}

export default App;
