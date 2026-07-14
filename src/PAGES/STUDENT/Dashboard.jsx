import "./DAST.css";
import { Link, useNavigate } from "react-router-dom";
import { applyScholarship } from "../../services/applicationService";

function StudentDashboard() {
  const navigate = useNavigate();

const handleLogout = () => {
  navigate("/");
};
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Scholar Portal</h2>

        <ul>
          <li>
  <Link to="/student">🏠 Dashboard</Link>
</li>

<li>
  <Link to="/student/apply">📝 Apply Scholarship</Link>
</li>

<li>
  <Link to="/student/applications">📄 My Applications</Link>
</li>

<li>
  <Link to="/student/profile">👤 Profile</Link>
</li>

<li onClick={handleLogout}>🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, Student 👋</h1>

        <div className="cards">
          <div className="card">
            <h3>Total Applications</h3>
            <p>3</p>
          </div>

          <div className="card">
            <h3>Approved</h3>
            <p>1</p>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <p>2</p>
          </div>

          <div className="card">
            <h3>Rejected</h3>
            <p>0</p>
          </div>
        </div>

        <div className="status-section">
          <h2>Recent Applications</h2>

          <table>
            <thead>
              <tr>
                <th>Scholarship</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Merit Scholarship</td>
                <td>05 Jul 2026</td>
                <td className="approved">Approved</td>
              </tr>

              <tr>
                <td>Need Based Grant</td>
                <td>08 Jul 2026</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Research Grant</td>
                <td>09 Jul 2026</td>
                <td className="pending">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;