import React, { Component } from 'react';
import './ContactEditForm.component.css'
import { Link } from 'react-router-dom'
import { Form, Text } from 'react-form';

class ContactEditForm extends Component {

  onSubmit = values => {
    this.props.onEditSubmit(values.name, values.phone, this.props.id);
  }

  onChangeName = event => {
    const value = event.target.value;
    this.props.onChangeName(value)
  }

  onChangePhone = event => {
    const value = event.target.value;
    this.props.onChangePhone(value);
  }

  render() {
    return (
      <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
        { formApi => (
          <form onSubmit={formApi.submitForm}>
          <Text
            className="field"
            field="name"
            defaultValue={this.props.currentName}
          />
          <Text
            className="field"
            field="phone"
            defaultValue={this.props.currentPhone}
          />
          <button type="submit">SAVE</button>
          <Link to="/">CANCEL</Link>
        </form>
        )}
      </Form>
    )
  }
}

export default ContactEditForm;
