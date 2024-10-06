import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  const [userName, setUserName] = useState(""); // State to store the user's name
  const navigate = useNavigate();

  useEffect(() => {
    // Get the username from localStorage
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName || "User");
  }, []);

  const handleVideoCall = () => {
    localStorage.setItem("path", "http://localhost:5173/dashboard");
    window.location.href =
      "https://videowithai.netlify.app?name=" +
      localStorage.getItem("userName");
  };

  const handleVideoCallWithChat = () => {
    window.location.href = "https://videoandchat.netlify.app";
  };

  return (
    <div className="dashboard-container">
      <h1>Hello, {userName}!</h1>
      <p>Welcome to your dashboard. Please select an option:</p>
      <div className="options">
        <button className="btn-video" onClick={handleVideoCall}>
          Video Call
        </button>
        <button className="btn-chat" onClick={handleVideoCallWithChat}>
          Video Call with Chat
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
