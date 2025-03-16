import { useState } from "react";
import { Bell, Trash2, CheckCircle, XCircle, BellOff, Filter } from "lucide-react";

const initialNotifications = [
  { id: 1, type: "booking", message: "Your booking for Spa is confirmed!", time: "2 mins ago", read: false },
  { id: 2, type: "payment", message: "Payment of $50 was successful!", time: "10 mins ago", read: false },
  { id: 3, type: "promo", message: "20% off on your next ride!", time: "1 hour ago", read: true },
  { id: 4, type: "alert", message: "System maintenance on March 20, 2025", time: "Yesterday", read: true },
];

 function Notification () {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [filter, setFilter] = useState("all");

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, read: true }))
    );
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const filteredNotifications = notifications.filter((notif) =>
    filter === "all" ? true : notif.type === filter
  );

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center">
            <Bell className="mr-2" /> Notifications
          </h2>
          <button
            onClick={toggleNotifications}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {notificationsEnabled ? <BellOff size={24} /> : <Bell size={24} />}
          </button>
        </div>
        <div className="flex justify-between mt-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded p-2 dark:bg-gray-700 dark:text-white"
          >
            <option value="all">All</option>
            <option value="booking">Bookings</option>
            <option value="payment">Payments</option>
            <option value="promo">Promotions</option>
            <option value="alert">Alerts</option>
          </select>
          <button
            onClick={markAllAsRead}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Mark All as Read
          </button>
        </div>
        <div className="mt-4 space-y-4">
          {notificationsEnabled ? (
            filteredNotifications.length === 0 ? (
              <p className="text-gray-500 text-center">No new notifications</p>
            ) : (
              filteredNotifications.map(({ id, type, message, time, read }) => (
                <div
                  key={id}
                  className={`flex items-center justify-between p-4 border rounded-lg shadow-sm ${
                    read ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-100 dark:bg-blue-700"
                  }`}
                >
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{message}</p>
                    <span className="text-sm text-gray-500">{time}</span>
                  </div>
                  <div className="flex space-x-2">
                    {!read && (
                      <button
                        onClick={() => markAsRead(id)}
                        className="text-green-500 hover:text-green-700"
                      >
                        <CheckCircle size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            <p className="text-gray-500 text-center">Notifications are turned off</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notification