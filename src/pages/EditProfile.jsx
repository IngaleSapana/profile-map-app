import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles';
import '../App.css';


const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profileIndex = profiles.findIndex(p => p.id.toString() === id);

  const [formData, setFormData] = useState({ ...profiles[profileIndex] });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    profiles[profileIndex] = formData;
    alert('Profile updated!');
    navigate('/');
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <h2>Edit Profile</h2>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <button onClick={handleSave} className="save-button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
