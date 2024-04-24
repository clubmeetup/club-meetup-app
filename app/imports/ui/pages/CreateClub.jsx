import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react'; // Import useState hook

const CreateClubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pictureUrl: '',
    interests: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the Meteor method to add the club
    Meteor.call('clubs.addClub', formData, (error, result) => {
      if (error) {
        console.error('Error adding club:', error);
        // Handle error
      } else {
        console.log('Club added successfully:', result);
        // Optionally handle success
      }
    });
  };

  return (
    <div>
      <h1>Create New Club</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        /><br /><br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        /><br /><br />
        <label htmlFor="pictureUrl">Picture URL:</label>
        <input
          type="url"
          id="pictureUrl"
          name="pictureUrl"
          value={formData.pictureUrl}
          onChange={handleInputChange}
          required
        /><br /><br />
        <button type="submit">Create Club</button>
      </form>
    </div>
  );
};

export default CreateClubForm;
