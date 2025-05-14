import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SuperAdminDashboard from "./components/SuperAdminDashboard";
import FacultyDashboard from "./FacultyPage/FacultyDashboard";
import PrivateRoute from "./components/PrivateRoute";
import FacultyPrivateRoute from "./FacultyPage/PrivateRoute";
import RoleLogin from "./FacultyPage/RoleLogin";

// Import dashboards for each faculty role
import StudentManagementDashboard from "./FacultyPage/roles/StudentManagementDashboard";
// import AccountSectionDashboard from "./FacultyPage/roles/AccountSectionDashboard";
// import DocumentSectionDashboard from "./FacultyPage/roles/DocumentSectionDashboard";
// import NotificationSystemDashboard from "./FacultyPage/roles/NotificationSystemDashboard";
// import LibraryDashboard from "./FacultyPage/roles/LibraryDashboard";
// import BusDashboard from "./FacultyPage/roles/BusDashboard";
// import HostelDashboard from "./FacultyPage/roles/HostelDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route
          path="/super-admin/*"
          element={
            <PrivateRoute>
              <SuperAdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/faculty/dashboard"
          element={
            <FacultyPrivateRoute>
              <FacultyDashboard />
            </FacultyPrivateRoute>
          }
        />

        <Route path="/faculty/rolelogin" element={<RoleLogin />} />

        {/* Role-based faculty dashboards */}
        <Route path="/faculty/student-management" element={<StudentManagementDashboard />} />
        {/* <Route path="/faculty/account-section" element={<AccountSectionDashboard />} />
        <Route path="/faculty/document-section" element={<DocumentSectionDashboard />} />
        <Route path="/faculty/notification-system" element={<NotificationSystemDashboard />} />
        <Route path="/faculty/library" element={<LibraryDashboard />} />
        <Route path="/faculty/bus" element={<BusDashboard />} />
        <Route path="/faculty/hostel" element={<HostelDashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
