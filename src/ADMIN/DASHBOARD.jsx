import "./admin.css";
import { useNavigate } from "react-router-dom";
function AdminDashboard() {
  const navigate = useNavigate();
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>

        <ul>
          <li>📊 Dashboard</li>
          <li onClick={() => navigate("/admin/scholarships")}>
  🎓 Manage Scholarships
</li>
          <li onClick={() => navigate("/admin/users")}>
  👥 Manage Users
</li>
         <li onClick={() => navigate("/admin/reports")}>
  📈 Reports
</li> 
          <li onClick={() => navigate("/")}>
  🚪 Logout
</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-main">

        <h1>Welcome, Admin 👋</h1>

        {/* Stats Cards */}
        <div className="admin-cards">

          <div className="admin-card">
            <h3>Total Students</h3>
            <p>250</p>
          </div>

          <div className="admin-card">
            <h3>Total Applications</h3>
            <p>120</p>
          </div>

          <div className="admin-card">
            <h3>Approved</h3>
            <p>60</p>
          </div>

          <div className="admin-card">
            <h3>Pending</h3>
            <p>45</p>
          </div>

          <div className="admin-card">
            <h3>Rejected</h3>
            <p>15</p>
          </div>

          <div className="admin-card">
            <h3>Committee Members</h3>
            <p>8</p>
          </div>

        </div>

        {/* Recent Activities */}
        <div className="activity-section">
          <h2>Recent Activities</h2>

          <ul>
            <li>📌 Shivam Maurya submitted a new application.</li>
            <li>✅ Merit Scholarship approved for Rahul Kumar.</li>
            <li>⭐ Committee scored 12 applications.</li>
            <li>🎓 New Scholarship added by Admin.</li>
            <li>📄 Monthly report generated.</li>
          </ul>
        </div>

        {/* Scholarship Overview */}
        <div className="overview-section">

          <h2>Scholarship Overview</h2>

          <table>
            <thead>
              <tr>
                <th>Scholarship</th>
                <th>Applications</th>
                <th>Approved</th>
                <th>Pending</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Merit Scholarship</td>
                <td>45</td>
                <td>30</td>
                <td>15</td>
              </tr>

              <tr>
                <td>Need Based Grant</td>
                <td>38</td>
                <td>20</td>
                <td>18</td>
              </tr>

              <tr>
                <td>Research Grant</td>
                <td>22</td>
                <td>10</td>
                <td>12</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;