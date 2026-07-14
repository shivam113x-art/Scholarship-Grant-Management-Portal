import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./PAGES/AUTHORIZATION/Auth";
import StudentDashboard from "./PAGES/STUDENT/Dashboard";
import ApplyScholarship from "./PAGES/STUDENT/ApplyScholarship";
import MyApplication from "./PAGES/STUDENT/MyApplication";
import Profile from "./PAGES/STUDENT/Profile";
import CommitteeDashboard from "./PAGES/COMMITTEE/commdash";
import ReviewApplication from "./PAGES/COMMITTEE/REVIEW APPLICATION";
import ScoreApplication from "./PAGES/COMMITTEE/SCORE APPLICATION";
import CommitteeReports from "./PAGES/COMMITTEE/Reports";
import AdminDashboard from "./ADMIN/DASHBOARD";
import ManageScholarships from "./ADMIN/Manage Scholarships";
import ManageUsers from "./ADMIN/Manage Users";
import AdminReports from "./ADMIN/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/apply" element={<ApplyScholarship />} />
        <Route path="/student/applications" element={<MyApplication />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/committee" element={<CommitteeDashboard />} />
        <Route path="/committee/review" element={<ReviewApplication />} />
        <Route path="/committee/score" element={<ScoreApplication />} />
        <Route path="/committee/reports" element={<CommitteeReports />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/scholarships" element={<ManageScholarships />}/>
        <Route path="/admin/users" element={<ManageUsers />}/>
        <Route path="/admin/reports" element={<AdminReports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;