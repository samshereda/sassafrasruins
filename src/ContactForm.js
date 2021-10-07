import React, { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm('a');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form id="contact_form">
      <p>
        We want to hear about your special day! Please fill in the details below
        and we’ll get back to you soon.
      </p>
      <label htmlFor="first_name">First Name:</label>
      <input id="first_name" name="first_name" type="text" required />
      <ValidationError 
        prefix="First name" 
        field="first_name"
        errors={state.errors}
      />
      <br />
      <label htmlFor="last_name">Last Name:</label>
      <input name="last_name" type="text" id="last_name" required />
      <ValidationError 
        prefix="Last name" 
        field="last_name"
        errors={state.errors}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input name="email" type="email" id="email" required />
      <ValidationError 
        prefix="Email" 
        field="first_name"
        errors={state.errors}
      />
      <br />
      <label htmlFor="phone">Phone Number:</label>
      <input name="phone" type="tel" id="phone" required />
      <br />
      <label htmlFor="date">Preferred Date:</label>
      <input name="date" type="date" id="date" />
      <br />
      <label htmlFor="guests">Number of Guests:</label>
      <input name="guests" type="text" id="guests" />
      <br />
      <label htmlFor="budget">Total Wedding Budget:</label>
      <input name="budget" type="text" id="budget" />
      <br />
      <label htmlFor="comments">Additional Comments:</label>
      <textarea name="comments" id="comments"></textarea>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
