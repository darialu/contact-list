import axios from 'axios';
import { 
    ONCONTACTADD, 
    SET_CONTACTS,
    ONCONTACTDELETE,
    ONSEARCHINPUTCHANGE,
    ONEDITID,
    ONEDITCONTACT,
    ONCHANGENAME,
    ONCHANGEPHONE
  } from './actionTypes';
import { contactsListUrl, contactItemUrl } from '../urls';


export const fetchContacts = () => dispatch => {
    return axios.get(contactsListUrl())
      .then(({ data }) => {
        return dispatch(setContacts(data));
      });
  };
  
export const setContacts = contacts => ({
type: SET_CONTACTS,
data: { contacts }
});

export const addContact = (
name = 'Anonimous',
phone='+380XXXXXXXXX',
image
) => dispatch => {
const contact = {name, phone, image};

axios.post(contactsListUrl(), { data: contact })
    .then(({ data }) => {
    dispatch({
        type: ONCONTACTADD,
        contact: {
        name, phone, image
        }
    });
    dispatch(setContacts(data))
    });
};

export const onContactDelete = id => dispatch => {
    axios.delete(contactItemUrl(id))
    .then(({ data }) => {
        dispatch({
            type: ONCONTACTDELETE,
            data: {
                id: id
            }
        });
        dispatch(setContacts(data))
        });
}

export const onEditId =  (id, name, phone) => dispatch => {
    dispatch({
        type: ONEDITID,
        data: {
            id: id,
            name: name,
            phone: phone
        }
    });
  };

  export const onChangeName = value => dispatch => {
    dispatch({
        type: ONCHANGENAME,
        data: {
            value: value
        }
    });
  }

  export const aditContact = (name, phone, id) => dispatch => {
    const contact = {name, phone};
    axios.put(contactItemUrl(id), { data: contact })
    .then(({ data }) => {
    dispatch({
        type: ONEDITCONTACT,
        contact: {
        name, phone, id
        }
    });
    dispatch(setContacts(data))
    });
};
  

export const searchInputChange = inputValue => dispatch => {
    axios.get(contactsListUrl())
    .then(({ data }) => {
        dispatch(setContacts(data))
        dispatch({
            type: ONSEARCHINPUTCHANGE,
            data: { 
                value: inputValue
                }
        })
    })
    
}