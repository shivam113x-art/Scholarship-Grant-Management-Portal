const express = require("express");
const router = express.Router();

const {
  createScholarship,
  getScholarships,
} = require("../controllers/scholarshipController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Admin Only
router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin"),
  createScholarship
);

// Everyone Logged In Can View
router.get(
  "/all",
  authMiddleware,
  getScholarships
);

module.exports = router;