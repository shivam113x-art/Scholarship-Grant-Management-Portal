const pool = require("../config/db");

const createScholarshipTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS scholarships (
      id SERIAL PRIMARY KEY,
      title VARCHAR(200) NOT NULL,
      description TEXT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      eligibility TEXT NOT NULL,
      deadline DATE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("Scholarships table created ✅");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = createScholarshipTable;