import React, { useState } from "react";

function AddContact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Please provide an input!");
      return;
    }

    props.onAdd(name, email);
    setEmail("");
    setName("");
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={nameChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailChange}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
