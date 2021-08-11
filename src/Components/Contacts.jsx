import contactsJSON from "../contacts.json"

import React, { Component } from 'react'

class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contactsJSON.slice(0,5)
        }
    }
    render() {
        console.log(this.state.contacts)
        return (
            <div>
                <table>
                    {this.state.contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                            <td>
                                <img src={contact.pictureUrl} alt=''></img>
                                <div>
                                    <h2>{contact.name}</h2>
                                    <p>{contact.popularity}</p>
                                </div>
                            </td>
                        </tr>
                        ) 
                    })}
                </table>
            </div>
        )
    }
}

export default Contacts
