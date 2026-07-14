import "./Profile.css";
import profileImage from "../../ASSETS/IMAGES/SPID.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <div className="profile-card">

        <div className="profile-image">
          <img
  src={profileImage}
  alt="Profile"
/>
        </div>

        <div className="profile-details">
          <div className="detail">
            <label>Full Name</label>
            <input type="text" value="Shivam Maurya" readOnly />
          </div>

          <div className="detail">
            <label>Email</label>
            <input type="email" value="shivam@example.com" readOnly />
          </div>

          <div className="detail">
            <label>Roll Number</label>
            <input type="text" value="BCA2026001" readOnly />
          </div>

          <div className="detail">
            <label>Course</label>
            <input type="text" value="BCA" readOnly />
          </div>

          <div className="detail">
            <label>Phone Number</label>
            <input type="text" value="+91 9876543210" readOnly />
          </div>

          <button className="edit-btn">
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;