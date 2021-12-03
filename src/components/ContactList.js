import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  return (
    <div className="ui celled list">
      {props.contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
