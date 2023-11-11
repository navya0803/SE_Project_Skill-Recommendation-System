import React, { useState } from 'react';
 
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const formSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
 
      const data = await response.json();
      console.log('Server response:', data);
 
      // Clear the form after successful submission
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
 
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
 
export default Contact;