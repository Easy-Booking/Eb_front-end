import React from "react";
import Header from "../../components/Header";
import { useState } from "react";


function Settings (){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const handleSave = () => {
    if (!name || !email) {
      setError("Invalid input! All fields are required.");
      return;
    }

    setError("");
    alert("Profile updated!");
  };

  const handleChangePassword = () => {
    if (!password) {
      setPasswordError("Password cannot be empty!");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters!");
      return;
    }
    setPasswordError(""); 
    alert("Password updated!");
  };
    
    return(

     <div className="bg-gray-900"> 
     <Header />

      <div className="min-h-screen  flex flex-col items-center p-4">

      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-72 mb-6"
        >
          Confirm
        </button>

        <h2 className="text-xl font-bold mb-4">Security Settings</h2>
        {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}

        <div className="mb-4">
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Confirm New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full rounded-md"
          />
        </div>

        <button
          onClick={handleChangePassword}
          className="bg-red-500 text-white px-4 py-2 rounded-md w-72 mb-6"
        >
          Update Password
        </button>

        <h2 className="text-xl font-bold mb-4">Notification Settings</h2>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
              className="form-checkbox"
            />
            <span className="ml-2">Enable Email Notifications</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={smsNotif}
              onChange={() => setSmsNotif(!smsNotif)}
              className="form-checkbox"
            />
            <span className="ml-2">Enable SMS Notifications</span>
          </label>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-96">
          Save
        </button>
      </div>
    </div>
    </div>
    
    )
}


export default Settings