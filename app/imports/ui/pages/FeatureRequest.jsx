import React, { useState } from 'react';

function FeatureRequestForm() {
  const [feature, setFeature] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Feature:', feature);
    console.log('Name:', name);
    console.log('Email:', email);
    // Clear form fields after submission
    setFeature('');
    setName('');
    setEmail('');
  };

  return (
    <div className="container">
      <h1>Request a Feature</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feature">Feature Request:</label>
        <textarea
          id="feature"
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
          rows="5"
          required
        ></textarea>

        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FeatureRequestForm;
