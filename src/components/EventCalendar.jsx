// import { useEffect, useState } from "react";
// import axios from "axios";

// const EventCalendar = () => {
//   const [events, setEvents] = useState([]);
//   const [eventName, setEventName] = useState(""); // 'name' changed to 'eventName'
//   const [eventDate, setEventDate] = useState("");
//   const [eventType, setEventType] = useState("holiday");
//   const [editingId, setEditingId] = useState(null);
//   const [editedEvent, setEditedEvent] = useState({ title: "", date: "", type: "holiday" });

//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const res = await axios.get("https://backend-smp.vercel.app/api/superadmin/events", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setEvents(res.data);
//     } catch (err) {
//       console.error("Error fetching events", err.response ? err.response.data : err.message);
//     }
//   };

//   const handleAddEvent = async () => {
//     if (!eventName.trim() || !eventDate) return;

//     const newEvent = {
//       title: eventName, // 'name' to 'title'
//       date: eventDate, // Ensure the date format is correct (YYYY-MM-DD)
//       type: eventType,
//     };

//     try {
//       await axios.post(
//         "https://backend-smp.vercel.app/api/superadmin/events",
//         newEvent,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setEventName("");
//       setEventDate("");
//       setEventType("holiday");
//       fetchEvents();
//     } catch (err) {
//       console.error("Error adding event", err.response ? err.response.data : err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://backend-smp.vercel.app/api/superadmin/events/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       fetchEvents();
//     } catch (err) {
//       console.error("Error deleting event", err.response ? err.response.data : err.message);
//     }
//   };

//   const handleUpdate = async () => {
//     if (!editedEvent.title.trim() || !editedEvent.date) return;

//     try {
//       await axios.put(
//         `https://backend-smp.vercel.app/api/superadmin/events/${editingId}`,
//         editedEvent,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setEditingId(null);
//       setEditedEvent({ title: "", date: "", type: "holiday" }); // Reset to default values
//       fetchEvents();
//     } catch (err) {
//       console.error("Error updating event", err.response ? err.response.data : err.message);
//     }
//   };

//   return (
//     <div>
//       <h3>Academic Calendar</h3>
//       <input
//         type="text"
//         placeholder="Event name"
//         value={eventName}
//         onChange={(e) => setEventName(e.target.value)}
//       />
//       <input
//         type="date"
//         value={eventDate}
//         onChange={(e) => setEventDate(e.target.value)}
//       />
//       <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
//         <option value="holiday">Holiday</option>
//         <option value="exam">Exam</option>
//       </select>
//       <button onClick={handleAddEvent}>Add Event</button>

//       <ul>
//         {events.map((event) => (
//           <li key={event._id}>
//             {editingId === event._id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editedEvent.title} // 'name' to 'title'
//                   onChange={(e) => setEditedEvent({ ...editedEvent, title: e.target.value })} // 'name' to 'title'
//                 />
//                 <input
//                   type="date"
//                   value={editedEvent.date}
//                   onChange={(e) => setEditedEvent({ ...editedEvent, date: e.target.value })}
//                 />
//                 <select
//                   value={editedEvent.type}
//                   onChange={(e) => setEditedEvent({ ...editedEvent, type: e.target.value })}
//                 >
//                   <option value="holiday">Holiday</option>
//                   <option value="exam">Exam</option>
//                 </select>
//                 <button onClick={handleUpdate}>Save</button>
//                 <button onClick={() => setEditingId(null)}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 {event.title} ({event.date}) - {event.type} {/* 'name' to 'title' */}
//                 <button
//                   onClick={() => {
//                     setEditingId(event._id);
//                     setEditedEvent({
//                       title: event.title,
//                       date: event.date.slice(0, 10),
//                       type: event.type
//                     }); // 'name' to 'title'
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(event._id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EventCalendar;

import { useEffect, useState } from "react";
import axios from "axios";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("holiday");
  const [editingId, setEditingId] = useState(null);
  const [editedEvent, setEditedEvent] = useState({
    title: "",
    date: "",
    type: "holiday",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "https://backend-smp.vercel.app/api/superadmin/events",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEvents(res.data);
    } catch (err) {
      console.error(
        "Error fetching events",
        err.response ? err.response.data : err.message
      );
    }
  };

  const handleAddEvent = async () => {
    if (!eventName.trim() || !eventDate) return;

    const newEvent = {
      title: eventName,
      date: eventDate,
      type: eventType,
    };

    try {
      await axios.post(
        "https://backend-smp.vercel.app/api/superadmin/events",
        newEvent,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEventName("");
      setEventDate("");
      setEventType("holiday");
      fetchEvents();
    } catch (err) {
      console.error(
        "Error adding event",
        err.response ? err.response.data : err.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://backend-smp.vercel.app/api/superadmin/events/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchEvents();
    } catch (err) {
      console.error(
        "Error deleting event",
        err.response ? err.response.data : err.message
      );
    }
  };

  const handleUpdate = async () => {
    if (!editedEvent.title.trim() || !editedEvent.date) return;

    try {
      await axios.put(
        `https://backend-smp.vercel.app/api/superadmin/events/${editingId}`,
        editedEvent,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditingId(null);
      setEditedEvent({ title: "", date: "", type: "holiday" });
      fetchEvents();
    } catch (err) {
      console.error(
        "Error updating event",
        err.response ? err.response.data : err.message
      );
    }
  };

  const getEventTypeColor = (type) => {
    return type === "holiday"
      ? "bg-blue-100 text-blue-800"
      : "bg-purple-100 text-purple-800";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        Academic Calendar
      </h3>

      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">
          Add New Event
        </h4>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Name
            </label>
            <input
              type="text"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:w-48">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:w-40">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="holiday">Holiday</option>
              <option value="exam">Exam</option>
            </select>
          </div>
        </div>
        <button
          onClick={handleAddEvent}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add Event
        </button>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-3">
          Events List
        </h4>
        {events.length === 0 ? (
          <p className="text-gray-500 italic">
            No events found. Add your first event above.
          </p>
        ) : (
          <ul className="space-y-3">
            {events.map((event) => (
              <li key={event._id} className="border rounded-lg overflow-hidden">
                {editingId === event._id ? (
                  <div className="p-4 bg-yellow-50">
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Name
                        </label>
                        <input
                          type="text"
                          value={editedEvent.title}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              title: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="md:w-48">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Date
                        </label>
                        <input
                          type="date"
                          value={editedEvent.date}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              date: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div className="md:w-40">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Event Type
                        </label>
                        <select
                          value={editedEvent.type}
                          onChange={(e) =>
                            setEditedEvent({
                              ...editedEvent,
                              type: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="holiday">Holiday</option>
                          <option value="exam">Exam</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleUpdate}
                        className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center justify-between p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3 md:mb-0">
                      <span className="font-medium text-gray-800">
                        {event.title}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getEventTypeColor(
                          event.type
                        )}`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingId(event._id);
                          setEditedEvent({
                            title: event.title,
                            date: event.date.slice(0, 10),
                            type: event.type,
                          });
                        }}
                        className="px-3 py-1 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="px-3 py-1 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
