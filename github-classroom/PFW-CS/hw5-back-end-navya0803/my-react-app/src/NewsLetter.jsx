import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    
    console.log('Subscribed with email:', email);
  };

  return (
    <section id="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <form>
        <label htmlFor="newsletter-email">Email:</label>
        <input
          type="email"
          id="newsletter-email"
          name="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="button" onClick={subscribe}>Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
