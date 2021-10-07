import React, { useState } from 'react';

const ContactForm = () => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date: '',
    guests: 0,
    budget: 0,
    comments: '',
  };

  const [formState, setFormState] = useState(initialState);

  function changeHandler({ target: { name, value } }) {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form>
      <p>
        We want to hear about your special day! Please fill in the details below
        and we’ll get back to you soon.
      </p>
      <label for="first_name">First Name:</label>
      <input
        name="first_name"
        type="text"
        value={formState.first_name}
        onChange={changeHandler}
        required
      />
      <label for="first_name">First Name:</label>
      <input
        name="first_name"
        type="text"
        value={formState.first_name}
        onChange={changeHandler}
        required
      />

      <submit></submit>
    </form>
  );
};

export default ContactForm;
