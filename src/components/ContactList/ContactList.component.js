import React, { Component } from 'react';
import './ContactList.component.css';
import ContactItem from '../ContactItem/ContactItem.component';


const ContactList = function({ contacts, actionDel, actionEdit }) {
  let result = <div>
    
    {contacts.map((contact, index) =>
    
      <ContactItem
        {...contact}
        id={index}
        key={index}
        actionDel={actionDel}
        actionEdit={actionEdit}
      />
    )}
   
    {contacts.length === 0 &&
      <p>nothing found</p>
    }
  </div>

  return result;
};

export default ContactList;
