// pages/connect-trainers.js
import Head from "next/head";
import { useEffect } from "react";
import LiveStatusBadge from "@/components/liveStatusBadge";

export default function ConnectTrainers() {
  useEffect(() => {
    window.course = function () {
      let connectContainer = document.getElementById("connectTrainersContainer");
      connectContainer.style =
        "display: flex; flex-direction: column; gap: 2vh; position: absolute; border: none; border-radius: 10px; width: 72vw; height: 83vh; top: 14vh; right: 0vw; background-color: transparent; padding: 2vh; color: white; font-family: 'Poppins', sans-serif;";
    };
    window.course();
  }, []);

  const trainers = [
    { name: "Dr. Kavitha M", status: "Online now", subject: "AI & Data Science" },
    { name: "Mr. Arvind Kumar", status: "Active 5 mins ago", subject: "Cybersecurity" },
    { name: "Mrs. Priya S", status: "Offline", subject: "Cloud Computing" },
    { name: "Mr. Senthil V", status: "Online now", subject: "Blockchain" }
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
          <button id="Connect" style = {{backgroundColor : "white", color : "black", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeConnectTrainersjs")}>Connect</button>
          <button id="Test" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeTestjs")}>Test and Assessment</button>
          <button id="Analysis" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAnalysisjs")}>Analysis</button>
        </div>

        

        <div
          id="connectTrainersContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            position: "absolute",
            border: "none",
            borderRadius: "10px",
            width: "72vw",
            height: "83vh",
            top: "14vh",
            right: "0vw",
            backgroundColor: "transparent",
            padding: "2vh",
            color: "white",
            fontFamily: "'Poppins', sans-serif"
          }}
        >
            <div class = "container" style = {{position : "relative", left : "60vw",  display : "flex", flexDirection : "horizontal", height : "fit-content", padding : "1vh", width : "fit-content", borderRadius : "10px", backgroundColor : "#3b3b3b", border : "none"}}>
                <button id = "Student" style={{ backgroundColor: "#3b3b3b", color: "white", borderRadius: "7px", padding: "1vh", fontFamily: "'Poppins', sans-serif", marginRight: "10px"}}onClick={() => (window.location.href = "homeConnectStudentsjs")}>Student</button>
                <button id = "Trainer" style={{ backgroundColor: "white", color: "black", borderRadius: "7px", padding: "1vh", fontFamily: "'Poppins', sans-serif" }}>Trainer</button>
            </div>

          <h2 style={{ marginBottom: "1vh" }}>Connected Trainers</h2>

          {trainers.map((trainer, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                padding: "1rem",
                borderRadius: "10px"
              }}
            >
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>{trainer.name}<span style = {{fontSize : "15px"}}><LiveStatusBadge key={index} name={trainer.name} role={trainer.role} /></span></h3>
              <span style={{ color: "white" }}>{trainer.subject}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
