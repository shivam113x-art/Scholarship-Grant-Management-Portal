import { useState } from "react";
import "./commdash.css";
import "./rev.css";

function ReviewApplication() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Shivam Maurya",
      scholarship: "Merit Scholarship",
      cgpa: "8.5",
      status: "Pending"
    },
    {
      id: 2,
      name: "Rahul Singh",
      scholarship: "Research Grant",
      cgpa: "8.2",
      status: "Pending"
    },
    {
      id: 3,
      name: "Aman Verma",
      scholarship: "Need Based Grant",
      cgpa: "7.9",
      status: "Pending"
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id
          ? { ...app, status: newStatus }
          : app
      )
    );
  };

  return (
    <div className="review-container">
      <h1>Review Applications</h1>

      <table className="review-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Scholarship</th>
            <th>CGPA</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.name}</td>
              <td>{app.scholarship}</td>
              <td>{app.cgpa}</td>
              <td>{app.status}</td>

              <td>
                {app.status === "Pending" ? (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() =>
                        updateStatus(app.id, "Approved")
                      }
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() =>
                        updateStatus(app.id, "Rejected")
                      }
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  app.status
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewApplication;