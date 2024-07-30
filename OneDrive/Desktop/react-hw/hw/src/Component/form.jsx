import React, { useState } from 'react';
import './form.css'; // Import CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      address: ''
    });
    alert(" submitted sucessfully")
  };

  return (
    <div className="form-container"> {/* Add a container div for styling */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button> 
      </form>
      <div className="submitted-data">
        <h2>Submitted Data</h2>
        {submittedData.length > 0 ? (
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.name}<br />
                <strong>Email:</strong> {data.email}<br />
                <strong>Phone Number:</strong> {data.phoneNumber}<br />
                <strong>Address:</strong> {data.address}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
