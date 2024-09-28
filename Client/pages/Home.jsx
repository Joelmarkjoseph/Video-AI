import React from "react";
import "./Home.css"; // Add styles for creativity
import NavBar from "../Components/NavBar";

function Home() {
  const styl = {
    color: "white",
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        {/* Video Background */}
        <video autoPlay loop muted className="background-video">
          <source
            src="bgv.mp4" // Sample video URL
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        <header className="home-header">
          <h1 style={styl}>Welcome to VIDEO AI</h1>
          <br />
          <button
            id="tryitbtn"
            onClick={() =>
              (window.location.href = "https://callwithai.netlify.app")
            }
          >
            TRY IT
          </button>
        </header>

        <div className="vid">
          <video src="Man.mp4" autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
}

export default Home;
