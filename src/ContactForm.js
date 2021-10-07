import React, { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm('mayakavy');
  if (state.succeeded) {
    return <p>Thanks! We'll get back to you soon!</p>;
  }

  return (
    <form id="contact_form" onSubmit={handleSubmit}>
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
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <br />
      <label htmlFor="phone">Phone Number:</label>
      <input name="phone" type="tel" id="phone" required />
      <ValidationError
        prefix="Phone number"
        field="phone"
        errors={state.errors}
      />
      <br />
      <label htmlFor="date">Preferred Date:</label>
      <input name="date" type="date" id="date" />
      <ValidationError prefix="Date" field="date" errors={state.errors} />
      <br />
      <label htmlFor="guests">Number of Guests:</label>
      <input name="guests" type="text" id="guests" />
      <ValidationError
        prefix="Number of Guests"
        field="guests"
        errors={state.errors}
      />
      <br />
      <label htmlFor="budget">Total Wedding Budget:</label>
      <input name="budget" type="text" id="budget" />
      <ValidationError
        prefix="Total wedding budget"
        field="budget"
        errors={state.errors}
      />
      <br />
      <label htmlFor="comments">Additional Comments:</label>
      <textarea name="comments" id="comments"></textarea>
      <ValidationError
        prefix="Additional comments"
        field="comments"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
