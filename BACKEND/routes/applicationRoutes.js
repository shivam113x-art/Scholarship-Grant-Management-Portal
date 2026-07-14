const express = require("express");
const router = express.Router();

const {
  applyForScholarship,
  getMyApplications,
  getAllApplications,
  updateApplicationStatus,
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Student Apply
router.post(
  "/apply",
  authMiddleware,
  roleMiddleware("student"),
  upload.single("document"),
  applyForScholarship
);


router.put("/test", (req, res) => {
  res.json({ message: "PUT route working" });
});

// Student View Own Applications
router.get(
  "/my-applications",
  authMiddleware,
  roleMiddleware("student"),
  getMyApplications
);


// Admin View All Applications
router.get(
  "/all",
  authMiddleware,
  roleMiddleware("admin"),
  getAllApplications
);

router.put(
  "/:id/status",
  authMiddleware,
  roleMiddleware("admin", "committee"),
  updateApplicationStatus
);


module.exports = router;