import "./commdash.css";
import { useNavigate } from "react-router-dom";

function CommitteeDashboard() {
  const navigate = useNavigate();
  return (
    <div className="committee-dashboard">

      {/* Sidebar */}
      <div className="committee-sidebar">
        <h2>Committee Panel</h2>

        <ul>
          <li>📊 Dashboard</li>
          <li onClick={() => navigate("/committee/review")}>
  <span className="icon">📋</span> Review Applications
</li>
          <li onClick={() => navigate("/committee/score")}>
  <span className="icon">⭐</span> Score Applications
</li>
         <li onClick={() => navigate("/committee/reports")}>
  📈 Reports
</li>
          <li onClick={() => navigate("/")}>
  🚪 Logout
</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="committee-main">

        <h1>Welcome, Committee Member 👋</h1>

        {/* Stats Cards */}
        <div className="committee-cards">

          <div className="committee-card">
            <h3>Total Applications</h3>
            <p>120</p>
          </div>

          <div className="committee-card">
            <h3>Pending Reviews</h3>
            <p>45</p>
          </div>

          <div className="committee-card">
            <h3>Approved</h3>
            <p>60</p>
          </div>

          <div className="committee-card">
            <h3>Rejected</h3>
            <p>15</p>
          </div>

          <div className="committee-card">
            <h3>Scholarships</h3>
            <p>8</p>
          </div>

          <div className="committee-card">
            <h3>This Month</h3>
            <p>28</p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>

          <div className="action-buttons">
            <button onClick={() => navigate("/committee/review")}>
  Review Applications
</button>
            <button onClick={() => navigate("/committee/score")}>
  Score Applications
</button>
            <button onClick={() => navigate("/committee/reports")}>
  Generate Report
</button>
          </div>
        </div>

        {/* Recent Applications */}
        <div className="recent-section">
          <h2>Recent Applications</h2>

          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Scholarship</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Shivam Maurya</td>
                <td>Merit Scholarship</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Rahul Kumar</td>
                <td>Need Based Grant</td>
                <td className="approved">Approved</td>
              </tr>

              <tr>
                <td>Amit Singh</td>
                <td>Research Grant</td>
                <td className="rejected">Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recent Activity */}
        <div className="activity-section">
          <h2>Recent Activity</h2>

          <ul>
            <li>📌 Shivam Maurya submitted Merit Scholarship.</li>
            <li>✅ Rahul Kumar application approved.</li>
            <li>❌ Amit Singh application rejected.</li>
            <li>📄 New Research Grant application received.</li>
          </ul>
        </div>

        {/* Scholarship Statistics */}
        <div className="stats-table">
          <h2>Scholarship Statistics</h2>

          <table>
            <thead>
              <tr>
                <th>Scholarship</th>
                <th>Applications</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Merit Scholarship</td>
                <td>45</td>
              </tr>

              <tr>
                <td>Need Based Grant</td>
                <td>38</td>
              </tr>

              <tr>
                <td>Research Grant</td>
                <td>22</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default CommitteeDashboard;