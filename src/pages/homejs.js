import Image from "next/image";
import Head from "next/head";
import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    window.userSwitchToTrainer = function () {
      let student = document.getElementById("Student");
      let trainer = document.getElementById("Trainer");
      trainer.style =
        "background-color : white; color : black; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; padding : 1vh;";
      student.style =
        "background-color : #3b3b3b; color : white; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; margin-right : 10px; padding : 1vh;";
    };

    window.userSwitchToStudent = function () {
      let student = document.getElementById("Student");
      let trainer = document.getElementById("Trainer");
      student.style =
        "background-color : white; color : black; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; margin-right : 10px; padding : 1vh;";
      trainer.style =
        "background-color : #3b3b3b; color : white; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; padding : 1vh;";
    };

    window.courseSwitchToEnrolled = function () {
      let Enrolled = document.getElementById("Enrolled");
      let Enroll = document.getElementById("Enroll");
      Enrolled.style =
        "background-color : white; color : black; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; padding : 1vh;";
      Enroll.style =
        "background-color : #3b3b3b; color : white; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; margin-right : 10px; padding : 1vh;";
    };

    window.courseSwitchToEnroll = function () {
      let Enrolled = document.getElementById("Enrolled");
      let Enroll = document.getElementById("Enroll");
      Enroll.style =
        "background-color : white; color : black; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; margin-right : 10px; padding : 1vh;";
      Enrolled.style =
        "background-color : #3b3b3b; color : white; border-radius : 7px; padding : 1px; font-family : 'Poppins', sans-serif; padding : 1vh;";
    };

    window.course = function () {
      let course = document.getElementById("Course");
      let ai = document.getElementById("AI Chat");
      let connect = document.getElementById("Connect");
      let test = document.getElementById("Test");
      let analysis = document.getElementById("Analysis");
      let courseContainer = document.getElementById("courseContainer");
      let aiContainer = document.getElementById("aiContainer");
      courseContainer.style =
        "visibility : visible; position : absolute; border : none; border-radius : 10px; width : 72vw; height : 83vh; top : 14vh; right : 2vw;";
      aiContainer.style =
        "visibility : hidden; display : flex; flex-direction : column; gap : 2vh; flex-flow: column-reverse; position : absolute; border : none; border-radius : 10px; width : 72vw; height : 83vh; top : 14vh; right : 2vw;";
      course.style =
        "background-color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      connect.style = ai.style = test.style = analysis.style =
        "background-color : transparent; color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
          <button id="Course" style = {{backgroundColor : "white", color : "black", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homejs")}>Course Management</button>
          <button id="AI Chat" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAIChatjs")}>AI Chat</button>
          <button id="Connect" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeConnectTrainersjs")}>Connect</button>
          <button id="Test" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeTestjs")}>Test and Assessment</button>
          <button id="Analysis" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAnalysisjs")}>Analysis</button>
        </div>

        <div id="courseContainer" className="container" style={{ position: "absolute", border: "none", borderRadius: "10px", width: "72vw", height: "83vh", top: "14vh", right: "2vw" }}>
          <div className="container" style={{ height: "8vh", border: "none" }}>
            <div className="container" style={{ position: "absolute", right: "4vh", display: "flex", flexDirection: "row", height: "fit-content", padding: "1vh", width: "fit-content", borderRadius: "10px", backgroundColor: "#3b3b3b", border: "none" }}>
              <button id="Enrolled" style = {{backgroundColor : "white", color : "black", borderRadius : "7px", padding : "1px", fontFamily : "'Poppins', sans-serif", marginRight : "10px", padding : "1vh"}} onClick={() => window.courseSwitchToEnrolled()}>Enrolled</button>
              <button id="Enroll" style = {{backgroundColor : "transparent", color : "white", borderRadius : "7px", padding : "1px", fontFamily : "'Poppins', sans-serif", marginRight : "10px", padding : "1vh"}} onClick={() => window.courseSwitchToEnroll()}>Enroll</button>
            </div>
          </div>

          {[60, 95, 95, 55, 20, 10, 70].map((progress, index) => (
            <div key={index} className="listcontainer">
              <div className="picturecontainer">
                <img src="blockchain.png" width="100%" alt="Course" />
              </div>
              <h2 style={{ marginLeft: "2vh", color: "white" }}>{index === 0 ? "Blockchain" : "Course Name"}</h2>
              <p style={{ color: "white", position: "relative", left: "-23vh", top: "10vh" }}>Description of the course</p>
              <div className="container" style={{ display: "flex", flexDirection: "row", height: "2vh", width: "20vw", position: "relative", left: "-50vh", top: "23vh" }}>
                <div className="container" style={{ backgroundColor: "white", height: "100%", width: `${progress}%` }}></div>
                <p style={{ color: "white" }}>{progress}%</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
