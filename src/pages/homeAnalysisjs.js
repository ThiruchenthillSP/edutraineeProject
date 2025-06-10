// pages/analysis.js
import Head from "next/head";
import { useEffect } from "react";

export default function Analysis() {
  useEffect(() => {
    window.course = function () {
      let analysisContainer = document.getElementById("analysisContainer");
      analysisContainer.style =
        "display: flex; flex-direction: column; gap: 2vh; position: absolute; border: none; border-radius: 10px; width: 72vw; height: 83vh; top: 14vh; right: 2vw; background-color:transparent; padding: 2vh; color: white; font-family: 'Poppins', sans-serif;";
    };
    window.course();
  }, []);

  const courses = [
    { name: "Blockchain", description: "Learn blockchain fundamentals.", progress: 80 },
    { name: "Machine Learning", description: "Understand ML algorithms.", progress: 65 },
    { name: "Web Development", description: "Frontend + Backend development.", progress: 90 },
    { name: "Cloud Computing", description: "Deploy scalable applications.", progress: 50 }
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main>
        <header style={{ position: "fixed", display: "flex", flexDirection: "row", alignItems: "center", height: "15px", width: "100vw", paddingLeft: "2vw", paddingTop: "30px", paddingBottom: "30px", backgroundColor: "black", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "antiquewhite" }}>Trainee</h1>
          <button style={{ fontWeight: "bold", position: "absolute", right: "3vw", backgroundColor: "#3b3b3b", borderRadius: "30px", fontFamily: "'Poppins', sans-serif", color: "white", fontSize: "15px", padding: "20px" }}>Login / Sign up</button>
          <a href="#" style={{ position: "absolute", right: "15vw" }}>Contact</a>
          <a href="#" style={{ position: "absolute", right: "21vw" }}>Pricing</a>
          <a href="#" style={{ position: "absolute", right: "26vw" }}>Solutions</a>
          <a href="#" style={{ position: "absolute", right: "32vw" }}>Features</a>
          <a href="#" style={{ position: "absolute", right: "38vw" }}>Home</a>
        </header>

        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "10px", position: "fixed", top: "14vh", left: "2vw", borderRadius: "20px", padding: "2vh", height: "80vh", width: "20vw", backgroundColor: "#3b3b3b", border: "none" }}>
          <button id="Course" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homejs")}>Course Management</button>
          <button id="AI Chat" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAIChatjs")}>AI Chat</button>
          <button id="Connect" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeConnectTrainersjs")}>Connect</button>
          <button id="Test" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeTestjs")}>Test and Assessment</button>
          <button id="Analysis" style = {{backgroundColor : "white", color : "black", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAnalysisjs")}>Analysis</button>
        </div>

        <div
          id="analysisContainer"
          style={{ position: "absolute", border: "none", borderRadius: "10px", width: "72vw", height: "20vh", top: "14vh", right: "1vw" }}
        >
          <h2 style={{ marginBottom: "1vh" }}>Performance Analysis</h2>

          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                padding: "1rem",
                borderRadius: "10px"
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>{course.name}</h3>
              <p style={{ color: "#ccc", marginBottom: "1rem" }}>{course.description}</p>
              <div
                style={{
                  backgroundColor: "#555",
                  height: "10px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  marginBottom: "0.5rem"
                }}
              >
                <div
                  style={{
                    width: `${course.progress}%`,
                    backgroundColor: "#0f0",
                    height: "100%"
                  }}
                ></div>
              </div>
              <span style={{ color: "#fff" }}>{course.progress}% Complete</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
