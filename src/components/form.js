import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rpzp8cq",
        "template_i47ouzc",
        form.current,
        "user_rTGEWElIw9Z8D9JObO3Qi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form_div">
      {" "}
      <h1 className="form_heading">Contact Me</h1>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label className="form_name">Name</label>
          <input
            className="form_name"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <label className="form_email">Email</label>
          <input
            className="form_email"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <label className="form_message">Message</label>
          <textarea
            name="message"
            className="form_message"
            placeholder="Message"
          />
          <input className="form_button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
