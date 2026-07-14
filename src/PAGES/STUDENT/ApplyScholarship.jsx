import "./applys.css";
import { useNavigate } from "react-router-dom";
import { applyScholarship } from "../../services/applicationService";

function ApplyScholarship() {
   const navigate = useNavigate();

const handleApply = async (id) => {
  try {
    const formData = new FormData();

    formData.append("scholarship_id", id);

    const token = localStorage.getItem("token");

    await applyScholarship(formData, token);

    alert("Application Submitted Successfully");
  } catch (error) {
    console.error(error);
    alert("Failed to Apply");
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application Submitted Successfully!");
    navigate("/student");
  };
  return (
    <div className="apply-container">
      <h1>Apply for Scholarship</h1>

      <form className="scholarship-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Scholarship Name</label>
          <select>
            <option>Select Scholarship</option>
            <option>Merit Scholarship</option>
            <option>Need Based Grant</option>
            <option>Research Grant</option>
          </select>
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Roll Number</label>
          <input type="text" placeholder="Enter roll number" />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input type="text" placeholder="Enter course" />
        </div>

        <div className="form-group">
          <label>CGPA / Percentage</label>
          <input type="text" placeholder="Enter CGPA or Percentage" />
        </div>

        <div className="form-group">
          <label>Family Income</label>
          <input type="number" placeholder="Enter annual income" />
        </div>

        <div className="form-group">
          <label>Upload Documents</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Reason for Applying</label>
          <textarea
            rows="5"
            placeholder="Why should you receive this scholarship?"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn"
           onClick={() => alert("Feature under development")}
           >
          Submit Application
        </button>

      </form>
    </div>
  );
}

export default ApplyScholarship;