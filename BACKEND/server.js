const createUserTable = require("./models/User");
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
const createScholarshipTable = require("./models/Scholarship");
const scholarshipRoutes = require("./routes/scholarshipRoutes");
const upload = require("./middleware/uploadMiddleware");
const createApplicationTable = require("./models/Application");
const applicationRoutes = require("./routes/applicationRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Scholarship Portal Backend Running 🚀");
});

app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected Route Accessed ✅",
    user: req.user,
  });
});

app.post(
  "/upload",
  upload.single("document"),
  (req, res) => {
    res.json({
      message: "File Uploaded Successfully ✅",
      file: req.file,
    });
  }
);

const PORT = process.env.PORT || 5000;
createUserTable();
createScholarshipTable();
createApplicationTable();
app.get(
  "/student-dashboard",
  authMiddleware,
  roleMiddleware("student"),
  (req, res) => {
    res.json({
      message: "Welcome Student 🎓",
    });
  }
);

app.get(
  "/committee-dashboard",
  authMiddleware,
  roleMiddleware("committee"),
  (req, res) => {
    res.json({
      message: "Welcome Committee 👨‍🏫",
    });
  }
);

app.get(
  "/admin-dashboard",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin 👑",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});