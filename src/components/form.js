import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneNumberChange = (e) => setPhoneNumber(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phoneNumber };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    console.log(requestOptions.body);

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((json) => console.log(json, "first"));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json, "last"));
  };

  return (
    <form className="form">
      <input placeholder="Name" value={name} onChange={onNameChange} required />
      <input
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={onPhoneNumberChange}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Connect{" "}
      </button>
    </form>
  );
}
