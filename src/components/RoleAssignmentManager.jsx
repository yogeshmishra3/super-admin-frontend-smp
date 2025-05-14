// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const RoleAssignmentManager = () => {
//   const [facultyList, setFacultyList] = useState([]);
//   const employmentStatuses = ["Probation Period", "Permanent Employee"];
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchFaculty();
//   }, []);

//   const fetchFaculty = async () => {
//     try {
//       const res = await axios.get("https://backend-smp.vercel.app/api/faculty", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // Add editable status field
//       const withEditable = res.data.map((faculty) => ({
//         ...faculty,
//         updatedStatus: faculty.employmentStatus || "Probation Period",
//       }));

//       setFacultyList(withEditable);
//     } catch (err) {
//       console.error("Error fetching faculty:", err);
//     }
//   };

//   const handleStatusChange = (id, value) => {
//     setFacultyList((prev) =>
//       prev.map((faculty) =>
//         faculty._id === id ? { ...faculty, updatedStatus: value } : faculty
//       )
//     );
//   };

//   const handleSave = async (id) => {
//     const faculty = facultyList.find((f) => f._id === id);
//     try {
//       await axios.put(
//         `https://backend-smp.vercel.app/api/faculty/${id}/status`,
//         {
//           employmentStatus: faculty.updatedStatus,
//         },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       alert("Employment status updated.");
//     } catch (err) {
//       console.error("Error updating status:", err);
//       alert("Update failed.");
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this faculty?")) return;
//     try {
//       await axios.delete(`https://backend-smp.vercel.app/api/faculty/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setFacultyList(facultyList.filter((f) => f._id !== id));
//       alert("Faculty deleted.");
//     } catch (err) {
//       console.error("Error deleting faculty:", err);
//       alert("Deletion failed.");
//     }
//   };

//   return (
//     <div>
//       <h3>Manage Non-Teaching Faculty</h3>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Employment Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {facultyList.map((faculty) => (
//             <tr key={faculty._id}>
//               <td>{faculty.name}</td>
//               <td>{faculty.role}</td>
//               <td>
//                 <select
//                   value={faculty.updatedStatus}
//                   onChange={(e) =>
//                     handleStatusChange(faculty._id, e.target.value)
//                   }
//                 >
//                   {employmentStatuses.map((status) => (
//                     <option key={status} value={status}>
//                       {status}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//               <td>
//                 <button onClick={() => handleSave(faculty._id)}>Save</button>{" "}
//                 <button onClick={() => handleDelete(faculty._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RoleAssignmentManager;

import React, { useEffect, useState } from "react";
import { UserX, UserCheck, Save, Trash2, RefreshCw, Users } from "lucide-react";

const RoleAssignmentManager = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const employmentStatuses = ["Probation Period", "Permanent Employee"];
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://backend-smp.vercel.app/api/faculty",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch faculty data");
      }

      const data = await response.json();

      // Add editable status field
      const withEditable = data.map((faculty) => ({
        ...faculty,
        updatedStatus: faculty.employmentStatus || "Probation Period",
        isEditing: false,
      }));

      setFacultyList(withEditable);
      setError(null);
    } catch (err) {
      console.error("Error fetching faculty:", err);
      setError("Failed to load faculty data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (id, value) => {
    setFacultyList((prev) =>
      prev.map((faculty) =>
        faculty._id === id
          ? { ...faculty, updatedStatus: value, isEditing: true }
          : faculty
      )
    );
  };

  const handleSave = async (id) => {
    const faculty = facultyList.find((f) => f._id === id);
    try {
      const response = await fetch(
        `https://backend-smp.vercel.app/api/faculty/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            employmentStatus: faculty.updatedStatus,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      setFacultyList((prev) =>
        prev.map((f) =>
          f._id === id
            ? { ...f, employmentStatus: f.updatedStatus, isEditing: false }
            : f
        )
      );

      // Show success notification (could use a toast component in a full app)
    } catch (err) {
      console.error("Error updating status:", err);
      setError("Failed to update status. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this faculty member?"))
      return;
    try {
      const response = await fetch(
        `https://backend-smp.vercel.app/api/faculty/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete faculty");
      }

      setFacultyList(facultyList.filter((f) => f._id !== id));
      // Show success notification
    } catch (err) {
      console.error("Error deleting faculty:", err);
      setError("Failed to delete faculty member. Please try again.");
    }
  };

  const getStatusBadgeColor = (status) => {
    return status === "Permanent Employee"
      ? "bg-green-100 text-green-800 border-green-200"
      : "bg-yellow-100 text-yellow-800 border-yellow-200";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex flex-col items-center">
          <RefreshCw className="animate-spin h-8 w-8 text-blue-500 mb-4" />
          <p className="text-gray-600">Loading faculty data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Non-Teaching Faculty Management
          </h2>
        </div>
        <button
          onClick={fetchFaculty}
          className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {facultyList.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No faculty members found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employment Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {facultyList.map((faculty) => (
                <tr
                  key={faculty._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {faculty.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-700">{faculty.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <select
                        value={faculty.updatedStatus}
                        onChange={(e) =>
                          handleStatusChange(faculty._id, e.target.value)
                        }
                        className={`form-select rounded border ${
                          faculty.isEditing
                            ? "border-blue-300 ring-1 ring-blue-200"
                            : "border-gray-300"
                        } focus:border-blue-500 focus:ring-blue-500 p-2 w-full`}
                      >
                        {employmentStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      {!faculty.isEditing && (
                        <span
                          className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(
                            faculty.employmentStatus
                          )} border`}
                        >
                          {faculty.employmentStatus === "Permanent Employee" ? (
                            <UserCheck className="w-3 h-3 mr-1" />
                          ) : (
                            <UserX className="w-3 h-3 mr-1" />
                          )}
                          {faculty.employmentStatus || "Probation Period"}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleSave(faculty._id)}
                        disabled={!faculty.isEditing}
                        className={`inline-flex items-center px-3 py-1.5 rounded-md ${
                          faculty.isEditing
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        } transition-colors`}
                      >
                        <Save className="h-4 w-4 mr-1" />
                        Save
                      </button>
                      <button
                        onClick={() => handleDelete(faculty._id)}
                        className="inline-flex items-center px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RoleAssignmentManager;
