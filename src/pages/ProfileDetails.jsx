import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { profiles } from '../data/profiles';
import MapComponent from '../components/MapComponent';

function ProfileDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find(p => p.id === parseInt(id));

  const geoLocations = {
    "Pune, Maharashtra, India": { lat: 18.5204, lng: 73.8567 },
    "Mumbai, Maharashtra, India": { lat: 19.0760, lng: 72.8777 }
  };

  const location = geoLocations[profile.address];

  return (
    <div className="summary-container">
      <div className="summary-card">
        <img
          src={profile.image}
          alt={profile.name}
          className="summary-image"
        />

        <div className="summary-details">
          <h2 className="summary-name">{profile.name}</h2>
          <p className="summary-address">{profile.address}</p>
          <p className="summary-description">{profile.description}</p>
        </div>

        <div className="summary-map">
          {location && <MapComponent location={location} />}
        </div>

        <div className="summary-buttons">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
