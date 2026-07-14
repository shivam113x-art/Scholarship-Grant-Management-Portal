const pool = require("../config/db");

// Create Scholarship
const createScholarship = async (req, res) => {
  try {
    const {
      title,
      description,
      amount,
      eligibility,
      deadline,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO scholarships
       (title, description, amount, eligibility, deadline)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [title, description, amount, eligibility, deadline]
    );

    res.status(201).json({
      message: "Scholarship Created Successfully",
      scholarship: result.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Scholarships
const getScholarships = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM scholarships ORDER BY id DESC"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createScholarship,
  getScholarships,
};