import React from 'react';
import PropType from 'prop-types';
import style from './ContactList.module.css';

class ContactList extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropType.array.isRequired,
    filter: PropType.string.isRequired,
    onDeleteContact: PropType.func.isRequired,
  };

  render() {
    const filteredContacts = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
    return (
      <ul className={style.contatcsList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={style.contact}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button onClick={() => this.props.onDeleteContact(contact.id)} className={style.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
