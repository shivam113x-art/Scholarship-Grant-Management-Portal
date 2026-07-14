import "./MyApplication.css";
import { useEffect, useState } from "react";
import { getMyApplications } from "../../services/applicationService";


function MyApplication() {
  return (
    <div className="applications-container">
      <h1>My Applications</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Scholarship</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Merit Scholarship</td>
              <td>05 Jul 2026</td>
              <td className="approved">Approved</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>

            <tr>
              <td>Need Based Grant</td>
              <td>08 Jul 2026</td>
              <td className="pending">Pending</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>

            <tr>
              <td>Research Grant</td>
              <td>09 Jul 2026</td>
              <td className="pending">Pending</td>
              <td>
                <button className="view-btn">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyApplication;