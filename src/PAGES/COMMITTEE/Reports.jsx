import { useState } from "react";
import "./Reports.css";

function Reports() {

  const [message, setMessage] = useState("");

  const generateReport = () => {
    setMessage("Report Generated Successfully!");
  };

  return (
    <div className="reports-container">

      <h1>Scholarship Reports</h1>

      <div className="report-cards">

        <div className="report-card">
          <h3>Total Applications</h3>
          <p>120</p>
        </div>

        <div className="report-card">
          <h3>Approved</h3>
          <p>60</p>
        </div>

        <div className="report-card">
          <h3>Rejected</h3>
          <p>15</p>
        </div>

        <div className="report-card">
          <h3>Pending</h3>
          <p>45</p>
        </div>

      </div>

      <div className="report-table">

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

      <button
        className="generate-btn"
        onClick={generateReport}
      >
        Generate Report
      </button>

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

    </div>
  );
}

export default Reports;