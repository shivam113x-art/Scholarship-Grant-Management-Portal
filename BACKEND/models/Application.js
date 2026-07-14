const pool = require("../config/db");

const createApplicationTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS applications (
      id SERIAL PRIMARY KEY,

      student_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

      scholarship_id INTEGER REFERENCES scholarships(id) ON DELETE CASCADE,

      document_url VARCHAR(255),

      status VARCHAR(50) DEFAULT 'Pending',

      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("Applications table created ✅");
  } catch (error) {
    console.error("Error creating applications table ❌");
    console.error(error.message);
  }
};

module.exports = createApplicationTable;