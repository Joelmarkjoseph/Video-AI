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
          <h1 style={styl}>VIDEO AI</h1>
          <p style={styl}>
            A Video Calling App which can give you an Emotional support, <br />{" "}
            Live AI Teacher, Personal Assistance
          </p>
          <br /> <br />
          <button
            id="tryitbtn"
            onClick={() =>
              (window.location.href = "https://videowithai.netlify.app")
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
