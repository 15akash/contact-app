import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addChangeHandler = (uName, uEmail) => {
    setContacts([
      ...contacts,
      { id: Math.random(), name: uName, email: uEmail },
    ]);
  };

  const removeHandler = (id) => {
    setContacts((contact) => contact.id !== id);
  };
  return (
    <div className="ui container">
      <Header />
      <AddContact onAdd={addChangeHandler} />
      <ContactList contacts={contacts} onRemove={removeHandler} />
    </div>
  );
}

export default App;
