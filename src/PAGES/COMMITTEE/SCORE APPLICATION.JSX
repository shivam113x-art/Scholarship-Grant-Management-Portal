import { useState } from "react";
import "./score.css";

function ScoreApplication() {
  const [academic, setAcademic] = useState("");
  const [financial, setFinancial] = useState("");
  const [documents, setDocuments] = useState("");

  const total =
    (Number(academic) || 0) +
    (Number(financial) || 0) +
    (Number(documents) || 0);

  return (
    <div className="score-container">

      <h1>Score Applications</h1>

      <div className="score-card">

        <h3>Student: Shivam Maurya</h3>
        <p>Scholarship: Merit Scholarship</p>

        <div className="form-group">
          <label>Academic Performance (0-10)</label>
          <input
            type="number"
            value={academic}
            onChange={(e) => setAcademic(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Financial Need (0-10)</label>
          <input
            type="number"
            value={financial}
            onChange={(e) => setFinancial(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Documents Verification (0-10)</label>
          <input
            type="number"
            value={documents}
            onChange={(e) => setDocuments(e.target.value)}
          />
        </div>

        <h2>Total Score: {total}/30</h2>

        <button className="save-btn">
          Save Score
        </button>

      </div>

    </div>
  );
}

export default ScoreApplication;