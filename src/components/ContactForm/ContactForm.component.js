import React, { Component } from 'react';
import './ContactForm.component.css'
import { Link } from 'react-router-dom'

class ContactForm extends Component {
  onSubmit = event => {
    event.preventDefault();

    const nameValue = event.target.querySelector('[name=name]').value;
    const phoneValue = event.target.querySelector('[name=phone]').value;

    this.props.onSubmit(nameValue, phoneValue);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="field"
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <input
          className="field"
          type="text"
          name="phone"
          placeholder="Enter number"
        />
        <button type="submit">Submit</button>
        <Link to="/">CANCEL</Link>
      </form>
    )
  }
}

export default ContactForm;
