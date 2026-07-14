const pool = require("../config/db");

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, fullname, email, role FROM users ORDER BY id"
    );

    res.json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get User By ID
const getUserById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, fullname, email, role FROM users WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM users WHERE id = $1",
      [req.params.id]
    );

    res.json({
      message: "User deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
};