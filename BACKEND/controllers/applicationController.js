const pool = require("../config/db");

// Student applies for scholarship
const applyForScholarship = async (req, res) => {
  try {
    const { scholarship_id } = req.body;

    const student_id = req.user.id;

    const document_url = req.file
      ? req.file.path
      : null;

    const result = await pool.query(
      `INSERT INTO applications
       (student_id, scholarship_id, document_url)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [student_id, scholarship_id, document_url]
    );

    res.status(201).json({
      message: "Application Submitted Successfully",
      application: result.rows[0],
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};



// Student views own applications
const getMyApplications = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM applications
       WHERE student_id = $1`,
      [req.user.id]
    );

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Admin views all applications
const getAllApplications = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM applications
       ORDER BY id DESC`
    );

    res.json(result.rows);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const result = await pool.query(
      `UPDATE applications
       SET status = $1
       WHERE id = $2
       RETURNING *`,
      [status, req.params.id]
    );

    res.json({
      message: "Application status updated",
      application: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  applyForScholarship,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
};