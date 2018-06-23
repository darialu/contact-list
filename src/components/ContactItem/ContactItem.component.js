import React, { Component } from 'react';
import './ContactItem.component.css'
import { Link } from 'react-router-dom'

class ContactItem extends Component {
  static defaultProps = {
    image: 'http://marketline.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
  }


  actionDel = (event) => {
    event.preventDefault();

    let keyValue = this.props.id;
    console.log(keyValue);
    this.props.actionDel(keyValue);
  }

  actionEdit = (event) => {
    event.preventDefault();

    let keyValue = this.props.id;
    let carrentName = this.props.name;
    let carrentPhone = this.props.phone;
    console.log(keyValue);
    this.props.actionEdit(keyValue, carrentName, carrentPhone);
  }

  render() {
    const { name, phone, image, id } = this.props;

    return (
     <li className="contact">
      <img className="contact-image" src={image} width="60px" height="60px" />
      <div>
          <div className="contact-name"> {name} </div>
          <div className="contact-number"> {phone} </div>
          <button onClick={this.actionDel}>delete</button>
          <button onClick={this.actionEdit}><Link to="/edit">edit</Link></button>
      </div>
     </li>
    );
  }
}

export default ContactItem;
