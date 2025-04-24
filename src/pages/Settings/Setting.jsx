import React, { useState } from "react";
import Header from "../../components/Header";

function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSave = () => {
    if (!name || !email) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Profile updated!");
  };

  const handleChangePassword = () => {
    if (!password) {
      setPasswordError("Password cannot be empty.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }
    setPasswordError("");
    alert("Password updated!");
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-8 rounded-2xl shadow-lg space-y-8">
          <h2 className="text-2xl font-bold">Profile Settings</h2>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full p-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full p-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Save Profile
          </button>

          <h2 className="text-2xl font-bold pt-6">Security Settings</h2>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium">New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleChangePassword}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Update Password
          </button>

          <h2 className="text-2xl font-bold pt-6">Notification Settings</h2>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={emailNotif}
                onChange={() => setEmailNotif(!emailNotif)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Receive Email Notifications</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={smsNotif}
                onChange={() => setSmsNotif(!smsNotif)}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Receive SMS Notifications</span>
            </label>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-4">
            Save Notification Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
