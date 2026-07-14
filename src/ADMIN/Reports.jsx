import "./Reports.css";

function Reports() {
  return (
    <div className="admin-main">

      <h1>Reports & Analytics 📊</h1>

      <div className="report-cards">

        <div className="report-card">
          <h3>Total Students</h3>
          <p>250</p>
        </div>

        <div className="report-card">
          <h3>Total Applications</h3>
          <p>120</p>
        </div>

        <div className="report-card">
          <h3>Approved</h3>
          <p>80</p>
        </div>

        <div className="report-card">
          <h3>Rejected</h3>
          <p>40</p>
        </div>

      </div>

      <div className="report-section">
        <h2>Scholarship Summary</h2>

        <table className="report-table">
          <thead>
            <tr>
              <th>Scholarship</th>
              <th>Applications</th>
              <th>Approved</th>
              <th>Rejected</th>
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
              <td>25</td>
              <td>13</td>
            </tr>

            <tr>
              <td>Research Grant</td>
              <td>37</td>
              <td>25</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="report-buttons">
        <button>Download PDF Report</button>
        <button>Export Excel</button>
      </div>

    </div>
  );
}

export default Reports;