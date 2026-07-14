import "./mngu.css";

function ManageUsers() {
  return (
    <div className="admin-main">

      <h1>Manage Users 👥</h1>

      <button className="add-user-btn">
        + Add New User
      </button>

      <table className="users-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Shivam Maurya</td>
            <td>shivam@gmail.com</td>
            <td>Student</td>
            <td className="active">Active</td>
            <td>
              <button className="view-btn">View</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Rahul Kumar</td>
            <td>rahul@gmail.com</td>
            <td>Committee</td>
            <td className="active">Active</td>
            <td>
              <button className="view-btn">View</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Amit Singh</td>
            <td>amit@gmail.com</td>
            <td>Student</td>
            <td className="inactive">Inactive</td>
            <td>
              <button className="view-btn">View</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ManageUsers;