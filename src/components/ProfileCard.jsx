import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ProfileCard({ profile }) {
  // Use profile.image if exists, else use a random Unsplash person image with profile id for variety
  const imageUrl = profile.image 
    ? profile.image 
    : `https://source.unsplash.com/featured/300x200/?person,${profile.id}`;

  return (
    <div className="profile-card">
      <img src={imageUrl} alt={profile.name} className="profile-image" />
      <div className="profile-details">
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-description">{profile.description}</p>
        <p className="profile-info"><strong>Address:</strong> {profile.address}</p>
        <p className="profile-info"><strong>Email:</strong> {profile.email}</p>

        <div className="profile-buttons">
          <Link to={`/profile/${profile.id}`}>
            <button className="summary-button">Summary</button>
          </Link>
          <Link to={`/edit/${profile.id}`}>
            <button className="edit-button">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
