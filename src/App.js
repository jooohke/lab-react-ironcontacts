import contactsJSON from "./contacts.json"
import './App.css';

import React, { Component } from 'react'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        contacts: contactsJSON.slice(0,5),
    }
} 

  addRandomContact = () => {
    const randomIndex = getRandomNumber(1, contactsJSON.length)
    const newArray = this.state.contacts.concat(contactsJSON[randomIndex])
    
    this.setState({
      contacts : newArray,
    })
  }

  sortByName = () => {
    const newArray = this.state.contacts.sort(function(a,b) {
      if(a.name.split(" ")[1] < b.name.split(" ")[1]) {return -1}
      else if(a.name.split(" ")[1] > b.name.split(" ")[1]) {return 1}
      else return 0
    })
    this.setState({
      contacts: newArray
    })
  }

  sortByPopularity = () => {
    const newArray = this.state.contacts.sort(function (a,b) {return Number(a.popularity)-Number(b.popularity)});

    this.setState({
      contacts: newArray
    })
  }

  
  render() {
    
    return (
      <div className="App">
        <button onClick={this.addRandomContact} id="add-random-contact-btn">Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>
                <p>Name</p>
                <button onClick={this.sortByName}>sort</button>
              </th>
              <th>
                <p>Popularity</p>
                <button onClick={this.sortByPopularity}>sort</button>
              </th>
              
            </tr>
            
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
                return (
                    <tr key={contact.id}>
                      <td><img src={contact.pictureUrl} alt=''/></td>
                      <td>{contact.name}</td>
                      <td>{Math.round(contact.popularity*100)/100}</td>
                  </tr>
                ) 
            })}
            </tbody>
        </table>
      </div>
    )
  }
}

export default App
