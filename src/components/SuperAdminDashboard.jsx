// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import CasteManager from "./CasteManager";
// // // import DepartmentManager from "./DepartmentManager";
// // // import SubjectManager from "./SubjectManager";
// // // import EventCalendar from "./EventCalendar";
// // // import RoleAssignmentManager from "./RoleAssignmentManager";
// // // import SemesterManager from "./SemesterManager";
// // // import StreamManager from "./StreamManager"; // ✅ Import StreamManager
// // // import "../assets/css/SuperAdminDashboard.css";

// // // const SuperAdminDashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [activeSection, setActiveSection] = useState("caste");
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     document.body.setAttribute('data-theme', theme);

// // //     const token = localStorage.getItem("token");

// // //     if (!token) {
// // //       navigate("/"); // Redirect to login page if no token
// // //       return;
// // //     }

// // //     const fetchUser = async () => {
// // //       try {
// // //         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         setUser(res.data);
// // //       } catch (err) {
// // //         console.error(err);
// // //         setError("Failed to fetch user data");
// // //         if (err.response?.status === 401 || err.response?.status === 403) {
// // //           localStorage.removeItem("token");
// // //           navigate("/"); // Redirect to login page if unauthorized
// // //         }
// // //       }
// // //     };

// // //     fetchUser();
// // //   }, [navigate, theme]);

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   const handleThemeChange = (e) => {
// // //     const newTheme = e.target.value;
// // //     setTheme(newTheme);
// // //     localStorage.setItem('theme', newTheme);
// // //     document.body.setAttribute('data-theme', newTheme);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token');
// // //     localStorage.removeItem('theme');
// // //     navigate("/"); // Redirect to login page after logout
// // //   };

// // //   const renderSection = () => {
// // //     switch (activeSection) {
// // //       case "caste":
// // //         return <CasteManager />;
// // //       case "semester":
// // //         return <SemesterManager />;
// // //       case "stream":
// // //         return <StreamManager />; // ✅ Add case for "stream"
// // //       case "department":
// // //         return <DepartmentManager />;
// // //       case "subject":
// // //         return <SubjectManager />;
// // //       case "calendar":
// // //         return <EventCalendar />;
// // //       case "facultyRoles":
// // //         return <RoleAssignmentManager />;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       <button
// // //         className="hamburger-menu"
// // //         onClick={toggleSidebar}
// // //         aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
// // //       >
// // //         ☰
// // //       </button>
// // //       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
// // //         <div className="sidebar-header">
// // //           <h3>Admin Menu</h3>
// // //         </div>
// // //         <select
// // //           className="theme-toggle"
// // //           value={theme}
// // //           onChange={handleThemeChange}
// // //           aria-label="Select theme"
// // //         >
// // //           <option value="light">Light</option>
// // //           <option value="dark">Dark</option>
// // //           <option value="blue">Blue</option>
// // //         </select>
// // //         <div className="nav-buttons">
// // //           <button
// // //             className={activeSection === "caste" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("caste");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Castes
// // //           </button>
// // //           <button
// // //             className={activeSection === "stream" ? "active" : ""} // Updated position
// // //             onClick={() => {
// // //               setActiveSection("stream");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Streams
// // //           </button>
// // //           <button
// // //             className={activeSection === "semester" ? "active" : ""} // Updated position
// // //             onClick={() => {
// // //               setActiveSection("semester");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Semesters
// // //           </button>
// // //           <button
// // //             className={activeSection === "department" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("department");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Departments
// // //           </button>
// // //           <button
// // //             className={activeSection === "subject" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("subject");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Subjects
// // //           </button>
// // //           <button
// // //             className={activeSection === "calendar" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("calendar");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Academic Calendar
// // //           </button>
// // //           <button
// // //             className={activeSection === "facultyRoles" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("facultyRoles");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Assign Faculty Roles
// // //           </button>
// // //           <button onClick={handleLogout} className="logout-button">
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <div className="main-content">
// // //         <h2>Super Admin Dashboard</h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //         {user ? (
// // //           <div>
// // //             <div className="user-info">
// // //               <p>Welcome, {user.username}!</p>
// // //               <p>Role: {user.role}</p>
// // //             </div>
// // //             <hr />
// // //             <div className="section-content">{renderSection()}</div>
// // //           </div>
// // //         ) : (
// // //           <p className="loading-message">Loading user data...</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SuperAdminDashboard;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import CasteManager from "./CasteManager";
// // import DepartmentManager from "./DepartmentManager";
// // import SubjectManager from "./SubjectManager";
// // import EventCalendar from "./EventCalendar";
// // import RoleAssignmentManager from "./RoleAssignmentManager";
// // import SemesterManager from "./SemesterManager";
// // import StreamManager from "./StreamManager";

// // // Icons import - using Lucide React
// // import {
// //   GraduationCap,
// //   BookOpen,
// //   Briefcase,
// //   Calendar,
// //   ClipboardList,
// //   Settings,
// //   Users,
// //   LogOut,
// //   Menu,
// //   X,
// //   Sun,
// //   Moon,
// //   Palette
// // } from 'lucide-react';

// // const SuperAdminDashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [activeSection, setActiveSection] = useState("caste");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Apply theme to document
// //     document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-blue');
// //     document.documentElement.classList.add(`theme-${theme}`);

// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       navigate("/");
// //       return;
// //     }

// //     const fetchUser = async () => {
// //       try {
// //         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setUser(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         setError("Failed to fetch user data");
// //         if (err.response?.status === 401 || err.response?.status === 403) {
// //           localStorage.removeItem("token");
// //           navigate("/");
// //         }
// //       }
// //     };

// //     fetchUser();
// //   }, [navigate, theme]);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const handleThemeChange = (newTheme) => {
// //     setTheme(newTheme);
// //     localStorage.setItem('theme', newTheme);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('theme');
// //     navigate("/");
// //   };

// //   const navigationItems = [
// //     { id: "caste", label: "Manage Castes", icon: <Users className="w-5 h-5" /> },
// //     { id: "stream", label: "Manage Streams", icon: <Settings className="w-5 h-5" /> },
// //     { id: "semester", label: "Manage Semesters", icon: <GraduationCap className="w-5 h-5" /> },
// //     { id: "department", label: "Manage Departments", icon: <Briefcase className="w-5 h-5" /> },
// //     { id: "subject", label: "Manage Subjects", icon: <BookOpen className="w-5 h-5" /> },
// //     { id: "calendar", label: "Academic Calendar", icon: <Calendar className="w-5 h-5" /> },
// //     { id: "facultyRoles", label: "Assign Faculty Roles", icon: <ClipboardList className="w-5 h-5" /> },
// //   ];

// //   const renderSection = () => {
// //     switch (activeSection) {
// //       case "caste": return <CasteManager />;
// //       case "semester": return <SemesterManager />;
// //       case "stream": return <StreamManager />;
// //       case "department": return <DepartmentManager />;
// //       case "subject": return <SubjectManager />;
// //       case "calendar": return <EventCalendar />;
// //       case "facultyRoles": return <RoleAssignmentManager />;
// //       default: return null;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white theme-blue:bg-blue-50 theme-blue:text-blue-900">
// //       {/* Mobile menu button */}
// //       <button
// //         className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-md lg:hidden"
// //         onClick={toggleSidebar}
// //         aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
// //       >
// //         {isSidebarOpen ? (
// //           <X className="w-6 h-6 text-gray-700 dark:text-gray-200 theme-blue:text-blue-700" />
// //         ) : (
// //           <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200 theme-blue:text-blue-700" />
// //         )}
// //       </button>

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
// //           } lg:relative lg:inset-auto lg:transform-none`}
// //       >
// //         <div className="flex flex-col h-full">
// //           {/* Sidebar header */}
// //           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <h3 className="text-xl font-semibold text-gray-800 dark:text-white theme-blue:text-blue-800">Admin Menu</h3>
// //           </div>

// //           {/* Theme switcher */}
// //           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <p className="text-sm font-medium mb-2">Select Theme</p>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => handleThemeChange('light')}
// //                 className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Light theme"
// //               >
// //                 <Sun className="w-5 h-5 text-yellow-500" />
// //               </button>
// //               <button
// //                 onClick={() => handleThemeChange('dark')}
// //                 className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Dark theme"
// //               >
// //                 <Moon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
// //               </button>
// //               <button
// //                 onClick={() => handleThemeChange('blue')}
// //                 className={`p-2 rounded-full ${theme === 'blue' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Blue theme"
// //               >
// //                 <Palette className="w-5 h-5 text-blue-500" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Navigation menu */}
// //           <nav className="flex-1 overflow-y-auto py-4">
// //             <ul className="space-y-1 px-3">
// //               {navigationItems.map((item) => (
// //                 <li key={item.id}>
// //                   <button
// //                     className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${activeSection === item.id
// //                         ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white theme-blue:bg-blue-200 theme-blue:text-blue-800"
// //                         : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 theme-blue:text-blue-700 theme-blue:hover:bg-blue-100"
// //                       }`}
// //                     onClick={() => {
// //                       setActiveSection(item.id);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                   >
// //                     <span className="mr-3">{item.icon}</span>
// //                     <span>{item.label}</span>
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>

// //           {/* Logout button */}
// //           <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// //             >
// //               <LogOut className="w-5 h-5 mr-2" />
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main content */}
// //       <div className={`transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-64"}`}>
// //         <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-md">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="flex items-center justify-between h-16">
// //               <h1 className="text-2xl font-bold text-gray-800 dark:text-white theme-blue:text-blue-800">
// //                 Super Admin Dashboard
// //               </h1>
// //               {user && (
// //                 <div className="hidden md:flex items-center space-x-4">
// //                   <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 theme-blue:bg-blue-200 rounded-full">
// //                     {user.role}
// //                   </span>
// //                   <span className="font-medium">Welcome, {user.username}!</span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </header>

// //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           {error && (
// //             <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100 theme-blue:bg-red-50 theme-blue:text-red-800">
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           {user ? (
// //             <>
// //               <div className="md:hidden mb-6 p-4 bg-gray-100 dark:bg-gray-700 theme-blue:bg-blue-100 rounded-lg">
// //                 <p className="font-medium">Welcome, {user.username}!</p>
// //                 <p className="text-sm text-gray-600 dark:text-gray-300 theme-blue:text-blue-700">Role: {user.role}</p>
// //               </div>

// //               <div className="bg-white dark:bg-gray-800 theme-blue:bg-blue-50 rounded-lg shadow-md p-6">
// //                 <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white theme-blue:text-blue-800">
// //                   {navigationItems.find(item => item.id === activeSection)?.label}
// //                 </h2>
// //                 <div className="section-content">{renderSection()}</div>
// //               </div>
// //             </>
// //           ) : (
// //             <div className="flex justify-center items-center h-64">
// //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white theme-blue:border-blue-600"></div>
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SuperAdminDashboard;

// import { useState, useEffect } from "react"
// import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom"
// import axios from "axios"
// import {
//   GraduationCap,
//   BookOpen,
//   Briefcase,
//   Calendar,
//   ClipboardList,
//   Settings,
//   Users,
//   LogOut,
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Palette,
// } from "lucide-react"

// // Import components
// import CasteManager from "./CasteManager"
// import DepartmentManager from "./DepartmentManager"
// import SubjectManager from "./SubjectManager"
// import EventCalendar from "./EventCalendar"
// import RoleAssignmentManager from "./RoleAssignmentManager"
// import SemesterManager from "./SemesterManager"
// import StreamManager from "./StreamManager"

// const SuperAdminDashboard = () => {
//   // Check if current viewport is mobile on initial render
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 1024

//   // Initialize sidebar as closed on mobile, open on desktop
//   const [isOpen, setIsOpen] = useState(!isMobile)
//   const [user, setUser] = useState(null)
//   const [error, setError] = useState(null)
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
//   const [showLogoutModal, setShowLogoutModal] = useState(false)

//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     // Apply theme to document
//     document.documentElement.classList.remove("theme-light", "theme-dark", "theme-blue")
//     document.documentElement.classList.add(`theme-${theme}`)

//     const token = localStorage.getItem("token")

//     if (!token) {
//       navigate("/")
//       return
//     }

//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         setUser(res.data)
//       } catch (err) {
//         console.error(err)
//         setError("Failed to fetch user data")
//         if (err.response?.status === 401 || err.response?.status === 403) {
//           localStorage.removeItem("token")
//           navigate("/")
//         }
//       }
//     }

//     fetchUser()
//   }, [navigate, theme])

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleThemeChange = (newTheme) => {
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme)
//   }

//   // Menu items with icons
//   const menuItems = [
//     { title: "Manage Castes", icon: <Users size={20} />, href: "/super-admin/caste" },
//     { title: "Manage Streams", icon: <Settings size={20} />, href: "/super-admin/stream" },
//     { title: "Manage Semesters", icon: <GraduationCap size={20} />, href: "/super-admin/semester" },
//     { title: "Manage Departments", icon: <Briefcase size={20} />, href: "/super-admin/department" },
//     { title: "Manage Subjects", icon: <BookOpen size={20} />, href: "/super-admin/subject" },
//     { title: "Academic Calendar", icon: <Calendar size={20} />, href: "/super-admin/calendar" },
//     { title: "Assign Faculty Roles", icon: <ClipboardList size={20} />, href: "/super-admin/faculty-roles" },
//   ]

//   // Handle menu click (close sidebar on mobile + handle logout)
//   const handleMenuClick = (item) => {
//     if (window.innerWidth < 1024) toggleSidebar() // Close sidebar on mobile

//     if (item?.action === "logout") {
//       // Show logout confirmation modal instead of logging out immediately
//       setShowLogoutModal(true)
//     }
//   }

//   // Handle logout confirmation
//   const handleLogout = () => {
//     // Clear the authentication token and redirect to the login page
//     localStorage.removeItem("token")
//     localStorage.removeItem("theme")
//     navigate("/") // Redirect to the login page
//   }

//   // Check if menu item is active
//   const isActive = (path) => {
//     return location.pathname === path
//   }

//   // Theme selector component
//   const ThemeSelector = () => (
//     <div className="px-5 py-4 border-b border-gray-700">
//       <p className="text-sm font-medium mb-2 text-white">Select Theme</p>
//       <div className="flex space-x-2">
//         <button
//           onClick={() => handleThemeChange("light")}
//           className={`p-2 rounded-full ${theme === "light" ? "bg-gray-600" : ""}`}
//           aria-label="Light theme"
//         >
//           <Sun className="w-5 h-5 text-yellow-500" />
//         </button>
//         <button
//           onClick={() => handleThemeChange("dark")}
//           className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-600" : ""}`}
//           aria-label="Dark theme"
//         >
//           <Moon className="w-5 h-5 text-gray-300" />
//         </button>
//         <button
//           onClick={() => handleThemeChange("blue")}
//           className={`p-2 rounded-full ${theme === "blue" ? "bg-gray-600" : ""}`}
//           aria-label="Blue theme"
//         >
//           <Palette className="w-5 h-5 text-blue-500" />
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <>
//       <div className="flex">
//         {/* Sidebar + Content */}
//         <div className="flex h-screen w-full">
//           {/* Mobile Header */}
//           <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white z-20 flex items-center justify-between px-4 shadow-md">
//             <button onClick={toggleSidebar} className="p-2" aria-label="Toggle sidebar">
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//             <h2 className="text-xl font-bold">Super Admin Dashboard</h2>
//           </div>

//           {/* Mobile overlay */}
//           {isOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar} />}

//           {/* Sidebar */}
//           <div
//             className={`${isOpen ? "translate-x-0" : "-translate-x-full"
//               } fixed lg:relative lg:translate-x-0 z-10 h-full transition-transform duration-300 ease-in-out bg-gray-800 text-white shadow-lg`}
//           >
//             <div className="flex flex-col h-full w-64">
//               {/* Theme Selector */}
//               <ThemeSelector />

//               {/* Sidebar Menu - add padding-top on mobile for the header */}
//               <nav className="flex-grow p-5 lg:pt-5 pt-16 overflow-y-auto">
//                 <ul className="space-y-2">
//                   {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         to={item.href}
//                         onClick={() => handleMenuClick(item)}
//                         className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-600 text-white font-medium" : "hover:bg-gray-700"
//                           }`}
//                         aria-current={isActive(item.href) ? "page" : undefined}
//                       >
//                         {item.icon}
//                         <span>{item.title}</span>
//                       </Link>
//                     </li>
//                   ))}
//                   <li>
//                     <button
//                       onClick={() => handleMenuClick({ action: "logout" })}
//                       className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
//                     >
//                       <LogOut size={20} />
//                       <span>Logout</span>
//                     </button>
//                   </li>
//                 </ul>
//               </nav>

//               {/* User info - visible only on mobile */}
//               {user && (
//                 <div className="p-5 border-t border-gray-700 lg:hidden">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
//                       {user.username.charAt(0).toUpperCase()}
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-white">{user.username}</span>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-2 w-2 rounded-full bg-green-400"></div>
//                         <span className="text-xs text-gray-300">{user.role}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Main Content - add padding-top on mobile for the header */}
//           <div className="flex-grow p-4 pt-20 lg:pt-4 overflow-auto w-full">
//             {/* User info - visible only on desktop */}
//             {user && (
//               <div className="hidden lg:block mb-6">
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 theme-blue:from-blue-600 theme-blue:to-indigo-700 rounded-xl shadow-lg overflow-hidden">
//                   <div className="flex items-stretch">
//                     {/* Left gradient section with avatar */}
//                     <div className="py-6 px-8 flex items-center">
//                       <div className="relative">
//                         <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl shadow-inner border-4 border-white">
//                           {user.username.charAt(0).toUpperCase()}
//                         </div>
//                         <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></div>
//                       </div>
//                     </div>

//                     {/* Right content section */}
//                     <div className="flex-grow bg-white dark:bg-gray-800 theme-blue:bg-blue-50 pl-4 flex justify-between items-center">
//                       <div className="flex flex-col">
//                         <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 theme-blue:text-blue-500 font-medium mb-1">
//                           Super Admin Dashboard
//                         </div>
//                         <div className="text-lg font-bold text-gray-800 dark:text-white theme-blue:text-blue-900">
//                           Welcome back, {user.username}!
//                         </div>
//                         <div className="flex items-center mt-2">
//                           <div className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 theme-blue:bg-blue-200 theme-blue:text-blue-800 rounded-full">
//                             {user.role}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Error message */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100 theme-blue:bg-red-50 theme-blue:text-red-800">
//                 <p>{error}</p>
//               </div>
//             )}

//             {/* Routes */}
//             <div className="bg-white dark:bg-gray-800 theme-blue:bg-blue-50 rounded-lg shadow-md p-6">
//               <Routes>
//                 <Route path="/caste" element={<CasteManager />} />
//                 <Route path="/stream" element={<StreamManager />} />
//                 <Route path="/semester" element={<SemesterManager />} />
//                 <Route path="/department" element={<DepartmentManager />} />
//                 <Route path="/subject" element={<SubjectManager />} />
//                 <Route path="/calendar" element={<EventCalendar />} />
//                 <Route path="/faculty-roles" element={<RoleAssignmentManager />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl w-80 mx-4 transform transition-all duration-300 scale-100 animate-scaleIn">
//             <div className="flex items-center mb-5">
//               <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
//                 <LogOut size={20} className="text-red-600 dark:text-red-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Confirm Logout</h3>
//             </div>

//             <p className="text-gray-600 dark:text-gray-300 mb-6">Are you sure you want to logout from your account?</p>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowLogoutModal(false)}
//                 className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm font-medium"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default SuperAdminDashboard

// // // import { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import CasteManager from "./CasteManager";
// // // import DepartmentManager from "./DepartmentManager";
// // // import SubjectManager from "./SubjectManager";
// // // import EventCalendar from "./EventCalendar";
// // // import RoleAssignmentManager from "./RoleAssignmentManager";
// // // import SemesterManager from "./SemesterManager";
// // // import StreamManager from "./StreamManager"; // ✅ Import StreamManager
// // // import "../assets/css/SuperAdminDashboard.css";

// // // const SuperAdminDashboard = () => {
// // //   const [user, setUser] = useState(null);
// // //   const [error, setError] = useState(null);
// // //   const [activeSection, setActiveSection] = useState("caste");
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// // //   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     document.body.setAttribute('data-theme', theme);

// // //     const token = localStorage.getItem("token");

// // //     if (!token) {
// // //       navigate("/"); // Redirect to login page if no token
// // //       return;
// // //     }

// // //     const fetchUser = async () => {
// // //       try {
// // //         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         });
// // //         setUser(res.data);
// // //       } catch (err) {
// // //         console.error(err);
// // //         setError("Failed to fetch user data");
// // //         if (err.response?.status === 401 || err.response?.status === 403) {
// // //           localStorage.removeItem("token");
// // //           navigate("/"); // Redirect to login page if unauthorized
// // //         }
// // //       }
// // //     };

// // //     fetchUser();
// // //   }, [navigate, theme]);

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   const handleThemeChange = (e) => {
// // //     const newTheme = e.target.value;
// // //     setTheme(newTheme);
// // //     localStorage.setItem('theme', newTheme);
// // //     document.body.setAttribute('data-theme', newTheme);
// // //   };

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token');
// // //     localStorage.removeItem('theme');
// // //     navigate("/"); // Redirect to login page after logout
// // //   };

// // //   const renderSection = () => {
// // //     switch (activeSection) {
// // //       case "caste":
// // //         return <CasteManager />;
// // //       case "semester":
// // //         return <SemesterManager />;
// // //       case "stream":
// // //         return <StreamManager />; // ✅ Add case for "stream"
// // //       case "department":
// // //         return <DepartmentManager />;
// // //       case "subject":
// // //         return <SubjectManager />;
// // //       case "calendar":
// // //         return <EventCalendar />;
// // //       case "facultyRoles":
// // //         return <RoleAssignmentManager />;
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       <button
// // //         className="hamburger-menu"
// // //         onClick={toggleSidebar}
// // //         aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
// // //       >
// // //         ☰
// // //       </button>
// // //       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
// // //         <div className="sidebar-header">
// // //           <h3>Admin Menu</h3>
// // //         </div>
// // //         <select
// // //           className="theme-toggle"
// // //           value={theme}
// // //           onChange={handleThemeChange}
// // //           aria-label="Select theme"
// // //         >
// // //           <option value="light">Light</option>
// // //           <option value="dark">Dark</option>
// // //           <option value="blue">Blue</option>
// // //         </select>
// // //         <div className="nav-buttons">
// // //           <button
// // //             className={activeSection === "caste" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("caste");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Castes
// // //           </button>
// // //           <button
// // //             className={activeSection === "stream" ? "active" : ""} // Updated position
// // //             onClick={() => {
// // //               setActiveSection("stream");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Streams
// // //           </button>
// // //           <button
// // //             className={activeSection === "semester" ? "active" : ""} // Updated position
// // //             onClick={() => {
// // //               setActiveSection("semester");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Semesters
// // //           </button>
// // //           <button
// // //             className={activeSection === "department" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("department");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Departments
// // //           </button>
// // //           <button
// // //             className={activeSection === "subject" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("subject");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Manage Subjects
// // //           </button>
// // //           <button
// // //             className={activeSection === "calendar" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("calendar");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Academic Calendar
// // //           </button>
// // //           <button
// // //             className={activeSection === "facultyRoles" ? "active" : ""}
// // //             onClick={() => {
// // //               setActiveSection("facultyRoles");
// // //               setIsSidebarOpen(false);
// // //             }}
// // //           >
// // //             Assign Faculty Roles
// // //           </button>
// // //           <button onClick={handleLogout} className="logout-button">
// // //             Logout
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <div className="main-content">
// // //         <h2>Super Admin Dashboard</h2>
// // //         {error && <p className="error-message">{error}</p>}
// // //         {user ? (
// // //           <div>
// // //             <div className="user-info">
// // //               <p>Welcome, {user.username}!</p>
// // //               <p>Role: {user.role}</p>
// // //             </div>
// // //             <hr />
// // //             <div className="section-content">{renderSection()}</div>
// // //           </div>
// // //         ) : (
// // //           <p className="loading-message">Loading user data...</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SuperAdminDashboard;

// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import CasteManager from "./CasteManager";
// // import DepartmentManager from "./DepartmentManager";
// // import SubjectManager from "./SubjectManager";
// // import EventCalendar from "./EventCalendar";
// // import RoleAssignmentManager from "./RoleAssignmentManager";
// // import SemesterManager from "./SemesterManager";
// // import StreamManager from "./StreamManager";

// // // Icons import - using Lucide React
// // import {
// //   GraduationCap,
// //   BookOpen,
// //   Briefcase,
// //   Calendar,
// //   ClipboardList,
// //   Settings,
// //   Users,
// //   LogOut,
// //   Menu,
// //   X,
// //   Sun,
// //   Moon,
// //   Palette
// // } from 'lucide-react';

// // const SuperAdminDashboard = () => {
// //   const [user, setUser] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [activeSection, setActiveSection] = useState("caste");
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// //   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     // Apply theme to document
// //     document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-blue');
// //     document.documentElement.classList.add(`theme-${theme}`);

// //     const token = localStorage.getItem("token");

// //     if (!token) {
// //       navigate("/");
// //       return;
// //     }

// //     const fetchUser = async () => {
// //       try {
// //         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setUser(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         setError("Failed to fetch user data");
// //         if (err.response?.status === 401 || err.response?.status === 403) {
// //           localStorage.removeItem("token");
// //           navigate("/");
// //         }
// //       }
// //     };

// //     fetchUser();
// //   }, [navigate, theme]);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   const handleThemeChange = (newTheme) => {
// //     setTheme(newTheme);
// //     localStorage.setItem('theme', newTheme);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     localStorage.removeItem('theme');
// //     navigate("/");
// //   };

// //   const navigationItems = [
// //     { id: "caste", label: "Manage Castes", icon: <Users className="w-5 h-5" /> },
// //     { id: "stream", label: "Manage Streams", icon: <Settings className="w-5 h-5" /> },
// //     { id: "semester", label: "Manage Semesters", icon: <GraduationCap className="w-5 h-5" /> },
// //     { id: "department", label: "Manage Departments", icon: <Briefcase className="w-5 h-5" /> },
// //     { id: "subject", label: "Manage Subjects", icon: <BookOpen className="w-5 h-5" /> },
// //     { id: "calendar", label: "Academic Calendar", icon: <Calendar className="w-5 h-5" /> },
// //     { id: "facultyRoles", label: "Assign Faculty Roles", icon: <ClipboardList className="w-5 h-5" /> },
// //   ];

// //   const renderSection = () => {
// //     switch (activeSection) {
// //       case "caste": return <CasteManager />;
// //       case "semester": return <SemesterManager />;
// //       case "stream": return <StreamManager />;
// //       case "department": return <DepartmentManager />;
// //       case "subject": return <SubjectManager />;
// //       case "calendar": return <EventCalendar />;
// //       case "facultyRoles": return <RoleAssignmentManager />;
// //       default: return null;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white theme-blue:bg-blue-50 theme-blue:text-blue-900">
// //       {/* Mobile menu button */}
// //       <button
// //         className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-md lg:hidden"
// //         onClick={toggleSidebar}
// //         aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
// //       >
// //         {isSidebarOpen ? (
// //           <X className="w-6 h-6 text-gray-700 dark:text-gray-200 theme-blue:text-blue-700" />
// //         ) : (
// //           <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200 theme-blue:text-blue-700" />
// //         )}
// //       </button>

// //       {/* Sidebar */}
// //       <div
// //         className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
// //           } lg:relative lg:inset-auto lg:transform-none`}
// //       >
// //         <div className="flex flex-col h-full">
// //           {/* Sidebar header */}
// //           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <h3 className="text-xl font-semibold text-gray-800 dark:text-white theme-blue:text-blue-800">Admin Menu</h3>
// //           </div>

// //           {/* Theme switcher */}
// //           <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <p className="text-sm font-medium mb-2">Select Theme</p>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => handleThemeChange('light')}
// //                 className={`p-2 rounded-full ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Light theme"
// //               >
// //                 <Sun className="w-5 h-5 text-yellow-500" />
// //               </button>
// //               <button
// //                 onClick={() => handleThemeChange('dark')}
// //                 className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Dark theme"
// //               >
// //                 <Moon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
// //               </button>
// //               <button
// //                 onClick={() => handleThemeChange('blue')}
// //                 className={`p-2 rounded-full ${theme === 'blue' ? 'bg-gray-200 dark:bg-gray-600 theme-blue:bg-blue-200' : ''}`}
// //                 aria-label="Blue theme"
// //               >
// //                 <Palette className="w-5 h-5 text-blue-500" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Navigation menu */}
// //           <nav className="flex-1 overflow-y-auto py-4">
// //             <ul className="space-y-1 px-3">
// //               {navigationItems.map((item) => (
// //                 <li key={item.id}>
// //                   <button
// //                     className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors ${activeSection === item.id
// //                         ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white theme-blue:bg-blue-200 theme-blue:text-blue-800"
// //                         : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 theme-blue:text-blue-700 theme-blue:hover:bg-blue-100"
// //                       }`}
// //                     onClick={() => {
// //                       setActiveSection(item.id);
// //                       setIsSidebarOpen(false);
// //                     }}
// //                   >
// //                     <span className="mr-3">{item.icon}</span>
// //                     <span>{item.label}</span>
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </nav>

// //           {/* Logout button */}
// //           <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 theme-blue:border-blue-200">
// //             <button
// //               onClick={handleLogout}
// //               className="flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
// //             >
// //               <LogOut className="w-5 h-5 mr-2" />
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main content */}
// //       <div className={`transition-all duration-300 ${isSidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-64"}`}>
// //         <header className="sticky top-0 z-30 bg-white dark:bg-gray-800 theme-blue:bg-blue-100 shadow-md">
// //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="flex items-center justify-between h-16">
// //               <h1 className="text-2xl font-bold text-gray-800 dark:text-white theme-blue:text-blue-800">
// //                 Super Admin Dashboard
// //               </h1>
// //               {user && (
// //                 <div className="hidden md:flex items-center space-x-4">
// //                   <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 theme-blue:bg-blue-200 rounded-full">
// //                     {user.role}
// //                   </span>
// //                   <span className="font-medium">Welcome, {user.username}!</span>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </header>

// //         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //           {error && (
// //             <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100 theme-blue:bg-red-50 theme-blue:text-red-800">
// //               <p>{error}</p>
// //             </div>
// //           )}

// //           {user ? (
// //             <>
// //               <div className="md:hidden mb-6 p-4 bg-gray-100 dark:bg-gray-700 theme-blue:bg-blue-100 rounded-lg">
// //                 <p className="font-medium">Welcome, {user.username}!</p>
// //                 <p className="text-sm text-gray-600 dark:text-gray-300 theme-blue:text-blue-700">Role: {user.role}</p>
// //               </div>

// //               <div className="bg-white dark:bg-gray-800 theme-blue:bg-blue-50 rounded-lg shadow-md p-6">
// //                 <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white theme-blue:text-blue-800">
// //                   {navigationItems.find(item => item.id === activeSection)?.label}
// //                 </h2>
// //                 <div className="section-content">{renderSection()}</div>
// //               </div>
// //             </>
// //           ) : (
// //             <div className="flex justify-center items-center h-64">
// //               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white theme-blue:border-blue-600"></div>
// //             </div>
// //           )}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SuperAdminDashboard;

// import { useState, useEffect } from "react"
// import { Route, Routes, Link, useNavigate, useLocation } from "react-router-dom"
// import axios from "axios"
// import {
//   GraduationCap,
//   BookOpen,
//   Briefcase,
//   Calendar,
//   ClipboardList,
//   Settings,
//   Users,
//   LogOut,
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Palette,
// } from "lucide-react"

// // Import components
// import CasteManager from "./CasteManager"
// import DepartmentManager from "./DepartmentManager"
// import SubjectManager from "./SubjectManager"
// import EventCalendar from "./EventCalendar"
// import RoleAssignmentManager from "./RoleAssignmentManager"
// import SemesterManager from "./SemesterManager"
// import StreamManager from "./StreamManager"

// const SuperAdminDashboard = () => {
//   // Check if current viewport is mobile on initial render
//   const isMobile = typeof window !== "undefined" && window.innerWidth < 1024

//   // Initialize sidebar as closed on mobile, open on desktop
//   const [isOpen, setIsOpen] = useState(!isMobile)
//   const [user, setUser] = useState(null)
//   const [error, setError] = useState(null)
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
//   const [showLogoutModal, setShowLogoutModal] = useState(false)

//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     // Apply theme to document
//     document.documentElement.classList.remove("theme-light", "theme-dark", "theme-blue")
//     document.documentElement.classList.add(`theme-${theme}`)

//     const token = localStorage.getItem("token")

//     if (!token) {
//       navigate("/")
//       return
//     }

//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("https://backend-smp.vercel.app/api/superadmin", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         setUser(res.data)
//       } catch (err) {
//         console.error(err)
//         setError("Failed to fetch user data")
//         if (err.response?.status === 401 || err.response?.status === 403) {
//           localStorage.removeItem("token")
//           navigate("/")
//         }
//       }
//     }

//     fetchUser()
//   }, [navigate, theme])

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleThemeChange = (newTheme) => {
//     setTheme(newTheme)
//     localStorage.setItem("theme", newTheme)
//   }

//   // Menu items with icons
//   const menuItems = [
//     { title: "Manage Castes", icon: <Users size={20} />, href: "/super-admin/caste" },
//     { title: "Manage Streams", icon: <Settings size={20} />, href: "/super-admin/stream" },
//     { title: "Manage Semesters", icon: <GraduationCap size={20} />, href: "/super-admin/semester" },
//     { title: "Manage Departments", icon: <Briefcase size={20} />, href: "/super-admin/department" },
//     { title: "Manage Subjects", icon: <BookOpen size={20} />, href: "/super-admin/subject" },
//     { title: "Academic Calendar", icon: <Calendar size={20} />, href: "/super-admin/calendar" },
//     { title: "Assign Faculty Roles", icon: <ClipboardList size={20} />, href: "/super-admin/faculty-roles" },
//   ]

//   // Handle menu click (close sidebar on mobile + handle logout)
//   const handleMenuClick = (item) => {
//     if (window.innerWidth < 1024) toggleSidebar() // Close sidebar on mobile

//     if (item?.action === "logout") {
//       // Show logout confirmation modal instead of logging out immediately
//       setShowLogoutModal(true)
//     }
//   }

//   // Handle logout confirmation
//   const handleLogout = () => {
//     // Clear the authentication token and redirect to the login page
//     localStorage.removeItem("token")
//     localStorage.removeItem("theme")
//     navigate("/") // Redirect to the login page
//   }

//   // Check if menu item is active
//   const isActive = (path) => {
//     return location.pathname === path
//   }

//   // Theme selector component
//   const ThemeSelector = () => (
//     <div className="px-5 py-4 border-b border-gray-700">
//       <p className="text-sm font-medium mb-2 text-white">Select Theme</p>
//       <div className="flex space-x-2">
//         <button
//           onClick={() => handleThemeChange("light")}
//           className={`p-2 rounded-full ${theme === "light" ? "bg-gray-600" : ""}`}
//           aria-label="Light theme"
//         >
//           <Sun className="w-5 h-5 text-yellow-500" />
//         </button>
//         <button
//           onClick={() => handleThemeChange("dark")}
//           className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-600" : ""}`}
//           aria-label="Dark theme"
//         >
//           <Moon className="w-5 h-5 text-gray-300" />
//         </button>
//         <button
//           onClick={() => handleThemeChange("blue")}
//           className={`p-2 rounded-full ${theme === "blue" ? "bg-gray-600" : ""}`}
//           aria-label="Blue theme"
//         >
//           <Palette className="w-5 h-5 text-blue-500" />
//         </button>
//       </div>
//     </div>
//   )

//   return (
//     <>
//       <div className="flex">
//         {/* Sidebar + Content */}
//         <div className="flex h-screen w-full">
//           {/* Mobile Header */}
//           <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white z-20 flex items-center justify-between px-4 shadow-md">
//             <button onClick={toggleSidebar} className="p-2" aria-label="Toggle sidebar">
//               {isOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//             <h2 className="text-xl font-bold">Super Admin Dashboard</h2>
//           </div>

//           {/* Mobile overlay */}
//           {isOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleSidebar} />}

//           {/* Sidebar */}
//           <div
//             className={`${isOpen ? "translate-x-0" : "-translate-x-full"
//               } fixed lg:relative lg:translate-x-0 z-10 h-full transition-transform duration-300 ease-in-out bg-gray-800 text-white shadow-lg`}
//           >
//             <div className="flex flex-col h-full w-64">
//               {/* Theme Selector */}
//               <ThemeSelector />

//               {/* Sidebar Menu - add padding-top on mobile for the header */}
//               <nav className="flex-grow p-5 lg:pt-5 pt-16 overflow-y-auto">
//                 <ul className="space-y-2">
//                   {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         to={item.href}
//                         onClick={() => handleMenuClick(item)}
//                         className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${isActive(item.href) ? "bg-blue-600 text-white font-medium" : "hover:bg-gray-700"
//                           }`}
//                         aria-current={isActive(item.href) ? "page" : undefined}
//                       >
//                         {item.icon}
//                         <span>{item.title}</span>
//                       </Link>
//                     </li>
//                   ))}
//                   <li>
//                     <button
//                       onClick={() => handleMenuClick({ action: "logout" })}
//                       className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
//                     >
//                       <LogOut size={20} />
//                       <span>Logout</span>
//                     </button>
//                   </li>
//                 </ul>
//               </nav>

//               {/* User info - visible only on mobile */}
//               {user && (
//                 <div className="p-5 border-t border-gray-700 lg:hidden">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
//                       {user.username.charAt(0).toUpperCase()}
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-semibold text-white">{user.username}</span>
//                       <div className="flex items-center space-x-2">
//                         <div className="h-2 w-2 rounded-full bg-green-400"></div>
//                         <span className="text-xs text-gray-300">{user.role}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Main Content - add padding-top on mobile for the header */}
//           <div className="flex-grow p-4 pt-20 lg:pt-4 overflow-auto w-full">
//             {/* User info - visible only on desktop */}
//             {user && (
//               <div className="hidden lg:block mb-6">
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 theme-blue:from-blue-600 theme-blue:to-indigo-700 rounded-xl shadow-lg overflow-hidden">
//                   <div className="flex items-stretch">
//                     {/* Left gradient section with avatar */}
//                     <div className="py-6 px-8 flex items-center">
//                       <div className="relative">
//                         <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl shadow-inner border-4 border-white">
//                           {user.username.charAt(0).toUpperCase()}
//                         </div>
//                         <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></div>
//                       </div>
//                     </div>

//                     {/* Right content section */}
//                     <div className="flex-grow bg-white dark:bg-gray-800 theme-blue:bg-blue-50 pl-4 flex justify-between items-center">
//                       <div className="flex flex-col">
//                         <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 theme-blue:text-blue-500 font-medium mb-1">
//                           Super Admin Dashboard
//                         </div>
//                         <div className="text-lg font-bold text-gray-800 dark:text-white theme-blue:text-blue-900">
//                           Welcome back, {user.username}!
//                         </div>
//                         <div className="flex items-center mt-2">
//                           <div className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 theme-blue:bg-blue-200 theme-blue:text-blue-800 rounded-full">
//                             {user.role}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Error message */}
//             {error && (
//               <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100 theme-blue:bg-red-50 theme-blue:text-red-800">
//                 <p>{error}</p>
//               </div>
//             )}

//             {/* Routes */}
//             <div className="bg-white dark:bg-gray-800 theme-blue:bg-blue-50 rounded-lg shadow-md p-6">
//               <Routes>
//                 <Route path="/caste" element={<CasteManager />} />
//                 <Route path="/stream" element={<StreamManager />} />
//                 <Route path="/semester" element={<SemesterManager />} />
//                 <Route path="/department" element={<DepartmentManager />} />
//                 <Route path="/subject" element={<SubjectManager />} />
//                 <Route path="/calendar" element={<EventCalendar />} />
//                 <Route path="/faculty-roles" element={<RoleAssignmentManager />} />
//               </Routes>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Logout Confirmation Modal */}
//       {showLogoutModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
//           <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl w-80 mx-4 transform transition-all duration-300 scale-100 animate-scaleIn">
//             <div className="flex items-center mb-5">
//               <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
//                 <LogOut size={20} className="text-red-600 dark:text-red-400" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Confirm Logout</h3>
//             </div>

//             <p className="text-gray-600 dark:text-gray-300 mb-6">Are you sure you want to logout from your account?</p>

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowLogoutModal(false)}
//                 className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm font-medium"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default SuperAdminDashboard

import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Calendar,
  ClipboardList,
  Settings,
  Users,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Palette,
  ChevronRight,
} from "lucide-react";

// Import components
import CasteManager from "./CasteManager";
import DepartmentManager from "./DepartmentManager";
import SubjectManager from "./SubjectManager";
import EventCalendar from "./EventCalendar";
import RoleAssignmentManager from "./RoleAssignmentManager";
import SemesterManager from "./SemesterManager";
import StreamManager from "./StreamManager";

const SuperAdminDashboard = () => {
  // Check if current viewport is mobile on initial render
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  // Initialize sidebar as closed on mobile, open on desktop
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.remove(
      "theme-light",
      "theme-dark",
      "theme-blue"
    );
    document.documentElement.classList.add(`theme-${theme}`);

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://backend-smp.vercel.app/api/superadmin",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data");
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("token");
          navigate("/");
        }
      }
    };

    fetchUser();

    // Add event listener to close sidebar on resize
    const handleResize = () => {
      if (window.innerWidth < 1024 && isOpen) {
        setIsOpen(false);
      } else if (window.innerWidth >= 1024 && !isOpen) {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, theme, isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Menu items with icons
  const menuItems = [
    {
      title: "Manage Castes",
      icon: <Users size={20} />,
      href: "/super-admin/caste",
    },
    {
      title: "Manage Streams",
      icon: <Settings size={20} />,
      href: "/super-admin/stream",
    },
    {
      title: "Manage Semesters",
      icon: <GraduationCap size={20} />,
      href: "/super-admin/semester",
    },
    {
      title: "Manage Departments",
      icon: <Briefcase size={20} />,
      href: "/super-admin/department",
    },
    {
      title: "Manage Subjects",
      icon: <BookOpen size={20} />,
      href: "/super-admin/subject",
    },
    {
      title: "Academic Calendar",
      icon: <Calendar size={20} />,
      href: "/super-admin/calendar",
    },
    {
      title: "Assign Faculty Roles",
      icon: <ClipboardList size={20} />,
      href: "/super-admin/faculty-roles",
    },
  ];

  // Handle menu click (close sidebar on mobile + handle logout)
  const handleMenuClick = (item) => {
    if (window.innerWidth < 1024) toggleSidebar(); // Close sidebar on mobile

    if (item?.action === "logout") {
      // Show logout confirmation modal instead of logging out immediately
      setShowLogoutModal(true);
    }
  };

  // Handle logout confirmation
  const handleLogout = () => {
    // Clear the authentication token and redirect to the login page
    localStorage.removeItem("token");
    localStorage.removeItem("theme");
    navigate("/"); // Redirect to the login page
  };

  // Check if menu item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Theme selector component
  const ThemeSelector = () => (
    <div className="px-4 py-3 border-b border-gray-700">
      <p className="text-sm font-medium mb-2 text-white">Select Theme</p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleThemeChange("light")}
          className={`p-2 rounded-full ${
            theme === "light" ? "bg-gray-600" : ""
          }`}
          aria-label="Light theme"
        >
          <Sun className="w-5 h-5 text-yellow-500" />
        </button>
        <button
          onClick={() => handleThemeChange("dark")}
          className={`p-2 rounded-full ${
            theme === "dark" ? "bg-gray-600" : ""
          }`}
          aria-label="Dark theme"
        >
          <Moon className="w-5 h-5 text-gray-300" />
        </button>
        <button
          onClick={() => handleThemeChange("blue")}
          className={`p-2 rounded-full ${
            theme === "blue" ? "bg-gray-600" : ""
          }`}
          aria-label="Blue theme"
        >
          <Palette className="w-5 h-5 text-blue-500" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex">
        {/* Sidebar + Content */}
        <div className="flex h-screen w-full">
          {/* Mobile Header */}
          <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-gray-800 text-white z-20 flex items-center justify-between px-4 shadow-md">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-700 transition-colors"
              aria-label="Toggle sidebar"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h2 className="text-xl font-bold">Super Admin Dashboard</h2>

            {/* User avatar in header for mobile */}
            {user && (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                  {user.username.charAt(0).toUpperCase()}
                </div>
              </div>
            )}
          </div>

          {/* Semi-transparent overlay for mobile */}
          {isOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
              onClick={toggleSidebar}
            />
          )}

          {/* Sidebar - improved for mobile */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } fixed lg:relative lg:translate-x-0 z-20 h-full transition-transform duration-300 ease-in-out bg-gray-800 text-white shadow-lg lg:w-64 w-3/4 max-w-xs`}
          >
            <div className="flex flex-col h-full">
              {/* Small brand header for mobile */}
              <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className="font-bold text-lg">Admin Panel</h2>
                <button
                  onClick={toggleSidebar}
                  className="p-1 rounded hover:bg-gray-700"
                  aria-label="Close sidebar"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* User info at top for mobile */}
              {user && (
                <div className="lg:hidden p-4 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-white">
                        {user.username}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        <span className="text-xs text-gray-300">
                          {user.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Theme Selector */}
              <ThemeSelector />

              {/* Sidebar Menu */}
              <nav className="flex-grow p-4 overflow-y-auto">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        onClick={() => handleMenuClick(item)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                          isActive(item.href)
                            ? "bg-blue-600 text-white font-medium"
                            : "hover:bg-gray-700"
                        }`}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        {item.icon}
                        <span className="text-sm">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="mt-6">
                    <button
                      onClick={() => handleMenuClick({ action: "logout" })}
                      className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-600/80 transition-colors duration-200 text-sm"
                    >
                      <LogOut size={20} />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content - add padding-top on mobile for the header */}
          <div className="flex-grow p-4 pt-20 lg:pt-4 overflow-auto w-full">
            {/* User info - visible only on desktop */}
            {user && (
              <div className="hidden lg:block mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 theme-blue:from-blue-600 theme-blue:to-indigo-700 rounded-xl shadow-lg overflow-hidden">
                  <div className="flex items-stretch">
                    {/* Left gradient section with avatar */}
                    <div className="py-6 px-8 flex items-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl shadow-inner border-4 border-white">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-white"></div>
                      </div>
                    </div>

                    {/* Right content section */}
                    <div className="flex-grow bg-white dark:bg-gray-800 theme-blue:bg-blue-50 pl-4 flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 theme-blue:text-blue-500 font-medium mb-1">
                          Super Admin Dashboard
                        </div>
                        <div className="text-lg font-bold text-gray-800 dark:text-white theme-blue:text-blue-900">
                          Welcome back, {user.username}!
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 theme-blue:bg-blue-200 theme-blue:text-blue-800 rounded-full">
                            {user.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-900 dark:text-red-100 theme-blue:bg-red-50 theme-blue:text-red-800">
                <p>{error}</p>
              </div>
            )}

            {/* Routes */}
            <div className="bg-white dark:bg-gray-800 theme-blue:bg-blue-50 rounded-lg shadow-md p-6">
              <Routes>
                <Route path="/caste" element={<CasteManager />} />
                <Route path="/stream" element={<StreamManager />} />
                <Route path="/semester" element={<SemesterManager />} />
                <Route path="/department" element={<DepartmentManager />} />
                <Route path="/subject" element={<SubjectManager />} />
                <Route path="/calendar" element={<EventCalendar />} />
                <Route
                  path="/faculty-roles"
                  element={<RoleAssignmentManager />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-2xl w-80 mx-4 transform transition-all duration-300 scale-100 animate-scaleIn">
            <div className="flex items-center mb-5">
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
                <LogOut size={20} className="text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Confirm Logout
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to logout from your account?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuperAdminDashboard;
