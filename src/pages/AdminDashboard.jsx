import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    description: "",
    address: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const isFormValid = () => {
    return formData.name && formData.photo && formData.description && formData.address;
  };

  const handleAdd = () => {
    if (!isFormValid()) {
      setError("Please fill in all the fields.");
      return;
    }

    if (isEditing) {
      setProfiles(profiles.map(profile =>
        profile.id === editId ? { ...formData, id: editId } : profile
      ));
      setIsEditing(false);
      setEditId(null);
    } else {
      const newProfile = { ...formData, id: Date.now() };
      setProfiles([...profiles, newProfile]);
    }

    setFormData({ name: "", photo: "", description: "", address: "" });
  };

  const handleEdit = (profile) => {
    setFormData(profile);
    setIsEditing(true);
    setEditId(profile.id);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(p => p.id !== id));
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="form-container">
        {error && <p className="error-message">{error}</p>}
        <input
          className="input-field"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="input-field"
          name="photo"
          placeholder="Photo URL"
          value={formData.photo}
          onChange={handleChange}
        />
        <input
          className="input-field"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          className="input-field"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          {isEditing ? "Update Profile" : "Add Profile"}
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      <h3 className="section-title">All Profiles</h3>
      <div className="profiles-list">
        {profiles.length === 0 && <p className="no-profiles">No profiles added yet.</p>}

        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} className="profile-img" />
            <div className="profile-info">
              <h4 className="profile-name">{profile.name}</h4>
              <p className="profile-desc">{profile.description}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <div className="profile-actions">
                <button className="btn btn-edit" onClick={() => handleEdit(profile)}>Edit</button>
                <button className="btn btn-delete" onClick={() => handleDelete(profile.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
