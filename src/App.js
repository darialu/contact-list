import './App.css';
import React, { Component } from 'react';
import ContactList from './components/ContactList/ContactList.component';
import SearchInput from './components/SearchInput/SearchInput.component';
import ContactForm from './components/ContactForm/ContactForm.component';
import ContactEditForm from './components/ContactEditForm/ContactEditForm.component';
// import axios from 'axios';
import {
  fetchContacts,
  addContact,
  onContactDelete,
  searchInputChange,
  onEditId,
  aditContact,
  onChangeName
} from './redux/actions';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';


class App extends Component {


  componentDidMount() {
    console.log('mounted')
    console.info('fetchContacts', fetchContacts);
    this.props.dispatch(fetchContacts());
  }

  onContactAdd = (name, phone, image) => {
    // const { dispatch } = this.props;

    this.props.history.push('/');

	  this.props.dispatch(addContact(name, phone,image));
  }

  onDeleteContact = (id) => {
  this.props.dispatch(onContactDelete(id));
  }

  onEditContact = (id, name, phone) => {
    this.props.dispatch(onEditId(id, name, phone));
  }

  onEditContactSubmit = (name, phone, id) => {
    this.props.dispatch(aditContact(name, phone, id));
    this.props.history.push('/');
  }

  onChangeName = value => {
    this.props.dispatch(onChangeName(value));
  }

  onSearchInputChange = (event) =>{
    this.props.dispatch(searchInputChange(event.target.value))
  }

  renderContactForm = () =>
    <div className="App-form-area">
        <ContactForm
           onSubmit={this.onContactAdd}
        />
    </div>

  renderContactEditForm = () =>
  <div className="App-form-area">
      <ContactEditForm
        onEditSubmit={this.onEditContactSubmit}
        id={this.props.id}
        currentName={this.props.currentName}
        currentPhone={this.props.currentPhone}
        onChangeName={this.onChangeName}
        onChangePhone={this.onChangePhone}
      />
  </div>
 


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
          <div>
            <div className="App-list-area">
              <SearchInput onChange={this.onSearchInputChange} />
              {
                !this.props.filteredContacts.length && this.props.searchInputValue
                    ? <p>No contacts found</p>
                    : <ContactList contacts={this.props.filteredContacts} 
                      actionDel={this.onDeleteContact} 
                      actionEdit={this.onEditContact}/>
              }
            </div>
            
            <button>
              <Link
                className="form-buttons contact-add--active"
                to="/add">
                Add contact
              </Link>
              </button>

          </div>
          } />
          <Route path='/add' render={this.renderContactForm} />
          
          <Route path='/edit' render={this.renderContactEditForm} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    contacts: state.contacts,
    searchInputValue: state.searchInputValue,
    filteredContacts: state.filteredContacts,
    id: state.id,
    currentName: state.currentName,
    currentPhone: state.currentPhone,
}
  };

export default withRouter(connect(mapStateToProps)(App));

