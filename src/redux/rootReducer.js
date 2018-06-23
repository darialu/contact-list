import { contacts } from '../config';
// import axios from 'axios';
import { 
  ONCONTACTADD, 
  SET_CONTACTS,
  ONCONTACTDELETE,
  ONSEARCHINPUTCHANGE,
  ONEDITID,
  ONEDITCONTACT,
  ONCHANGENAME
} from './actionTypes';

const initialState = {
    isLoading: false,
    // contacts: contacts.slice(),
    contacts: [],
    searchInputValue: '',
    filteredContacts: contacts,
    id: 0,
    currentName: '',
    currentPhone: ''
}

export default (state = initialState, action) => {
    switch (action.type) {

      case SET_CONTACTS: {
        const filteredContacts = action.data.contacts;
  
        return { ...state, filteredContacts };
      }

      case ONSEARCHINPUTCHANGE: {
        const searchInputValue = action.data.value;
        const filteredContacts = state.filteredContacts.filter(({ name }) =>
          name.toLowerCase().includes(searchInputValue.toLowerCase())
        );
        return { ...state, searchInputValue, filteredContacts}
      }

      case ONCONTACTDELETE: {
        let contacts = state.contacts.slice();
        contacts.splice(action.data.id, 1);
        let filteredContacts = contacts
        return { ...state, contacts, filteredContacts} ;
      }

      case ONCONTACTADD: {
        let contacts = state.contacts.slice();
        // const contacts = [ ...state, { name: action.data.name, phone: action.data.phone }];
        // contacts = [...contacts, { name: action.data.name, phone: action.data.phone }]
        contacts.push({ name: action.contact.name, phone: action.contact.phone });
        // let filteredContacts = contacts
        return { ...state, contacts} ;
      }

      case ONEDITID: {
        let id = action.data.id;
        let currentName = action.data.name;
        let currentPhone = action.data.phone;
        return {...state , id, currentName, currentPhone}
      }

      case ONCHANGENAME: {
        let currentName = action.data.value
        return {...state ,currentName}
      }

      case ONEDITCONTACT: {
        let index = action.contact.id;
        let contacts = state.contacts.slice();
        contacts.splice(index, 1, { name: action.contact.name, phone: action.contact.phone });
        return { ...state, contacts} ;
      }

      default:
        return state
    }
    
  }