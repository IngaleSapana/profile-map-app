import React, { useState, useEffect } from 'react';
import { profiles } from '../data/profiles';
import ProfileCard from '../components/ProfileCard';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  useEffect(() => {
    const filtered = profiles.filter(profile =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProfiles(filtered);
  }, [searchTerm]);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Find the Right Profile</h1>

        <input
          type="text"
          placeholder="Search by name or address..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Link to="/admin">
          <button className="admin-button">Go to Admin Dashboard</button>
        </Link>
      </div>

      <div className="profile-grid">
        {filteredProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default Home;
