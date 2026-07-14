import "./mngs.css";

function ManageScholarships() {
  return (
    <div className="admin-main">

      <li onClick={() => navigate("/admin/scholarships")}>
  🎓 Manage Scholarships
</li>

      <button className="add-btn">
        + Add New Scholarship
      </button>

      <table className="scholarship-table">
        <thead>
          <tr>
            <th>Scholarship Name</th>
            <th>Amount</th>
            <th>Deadline</th>
            <th>Eligibility</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Merit Scholarship</td>
            <td>₹50,000</td>
            <td>31 Dec 2026</td>
            <td>CGPA 8.0+</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Need Based Grant</td>
            <td>₹40,000</td>
            <td>15 Dec 2026</td>
            <td>Income Below ₹2L</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Research Grant</td>
            <td>₹75,000</td>
            <td>20 Jan 2027</td>
            <td>Research Proposal</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default ManageScholarships;