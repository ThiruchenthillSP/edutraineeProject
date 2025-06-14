// pages/connect-students.js
import Head from "next/head";
import { useEffect, useState } from "react";
import LiveStatusBadge from "@/components/liveStatusBadge";
import CourseProgress from "@/components/courseProgress";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function ConnectStudents() {
  const [onlineStatus, setOnlineStatus] = useState({});
  const [studentId, setStudentId] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [studentCourses, setStudentCourses] = useState([]);

  const students = [
    { name: "Arjun V", role: "Student", course: "Blockchain", progress: 75 },
    { name: "Sneha R", role: "Student", course: "AI/ML", progress: 40 },
    { name: "Rahul K", role: "Student", course: "Web Development", progress: 90 },
    { name: "Divya S", role: "Student", course: "Cloud Computing", progress: 55 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const status = {};
      students.forEach(student => {
        status[student.name] = Math.random() > 0.5;
      });
      setOnlineStatus(status);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.course = function () {
      let connectContainer = document.getElementById("connectStudentsContainer");
      connectContainer.style =
        "display: flex; flex-direction: column; gap: 2vh; position: absolute; border: none; border-radius: 10px; width: 72vw; height: 83vh; top: 14vh; right: 0vw; background-color: transparent; padding: 2vh; color: white; font-family: 'Poppins', sans-serif;";
    };
    window.course();
  }, []);

  const fetchStudentCourses = async () => {
    try {
      const docRef = doc(db, "students", studentId.trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStudentCourses(docSnap.data().courses || []);
      } else {
        alert("No such student found.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch courses.");
    }
  };

  const addCourseToStudent = async () => {
    if (!studentId || !newCourse) return alert("Both fields required");
    try {
      const docRef = doc(db, "students", studentId.trim());
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        alert("Student not found.");
        return;
      }

      const existingCourses = docSnap.data().courses || [];
      const updatedCourses = [...existingCourses, newCourse];
      await updateDoc(docRef, { courses: updatedCourses });
      setNewCourse("");
      setStudentCourses(updatedCourses);
      alert("✅ Course added!");
    } catch (err) {
      console.error(err);
      alert("Error adding course.");
    }
  };

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
        {/* Header */}
        <header style={{ position: "fixed", display: "flex", flexDirection: "row", alignItems: "center", height: "15px", width: "100vw", paddingLeft: "2vw", paddingTop: "30px", paddingBottom: "30px", backgroundColor: "black", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", color: "antiquewhite" }}>Trainee</h1>
          <button style={{ fontWeight: "bold", position: "absolute", right: "3vw", backgroundColor: "#3b3b3b", borderRadius: "30px", fontFamily: "'Poppins', sans-serif", color: "white", fontSize: "15px", padding: "20px" }}>Login / Sign up</button>
          <a href="#" style={{ position: "absolute", right: "15vw" }}>Contact</a>
          <a href="#" style={{ position: "absolute", right: "21vw" }}>Pricing</a>
          <a href="#" style={{ position: "absolute", right: "26vw" }}>Solutions</a>
          <a href="#" style={{ position: "absolute", right: "32vw" }}>Features</a>
          <a href="#" style={{ position: "absolute", right: "38vw" }}>Home</a>
        </header>

        {/* Sidebar */}
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "10px", position: "fixed", top: "14vh", left: "2vw", borderRadius: "20px", padding: "2vh", height: "80vh", width: "20vw", backgroundColor: "#3b3b3b", border: "none" }}>
          <button style={{ backgroundColor: "white", color: "black", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homejs")}>Course Management</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeAIChatjs")}>AI Chat</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeConnectTrainersjs")}>Connect</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeTestjs")}>Test and Assessment</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeAnalysisjs")}>Analysis</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeRegisterStudent")}>Register Student</button>
          <button style={{ backgroundColor: "transparent", color: "white", width: "97%", height: "7vh", paddingLeft: "10px", fontSize: "15px", borderRadius: "10px" }} onClick={() => (window.location.href = "homeViewStudent")}>View Student</button>
        </div>

        {/* Main Container */}
        <div id="connectStudentsContainer">
          {/* Manage courses */}
          <div style={{ marginBottom: "2vh" }}>
            <h3>Manage Student Courses</h3>
            <input type="text" placeholder="Student ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} style={{ margin: "0.5rem", padding: "0.5rem", borderRadius: "5px" }} />
            <button onClick={fetchStudentCourses} style={{ padding: "0.5rem", borderRadius: "5px", fontWeight: "bold" }}>Fetch Courses</button>
            <br />
            <input type="text" placeholder="New Course Name" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} style={{ margin: "0.5rem", padding: "0.5rem", borderRadius: "5px" }} />
            <button onClick={addCourseToStudent} style={{ padding: "0.5rem", borderRadius: "5px", fontWeight: "bold" }}>Add Course</button>
            <ul style={{ marginTop: "1vh" }}>
              {studentCourses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>

          {/* Student cards */}
          {students.map((student, index) => (
            <div key={index} style={{ backgroundColor: "#222", padding: "1rem", borderRadius: "10px" }}>
              <h3 style={{ color: "#fff", marginBottom: "0.5rem" }}>{student.name}</h3>
              <p style={{ color: "#ccc", marginBottom: "0.5rem" }}>{student.course}</p>
              <LiveStatusBadge name={student.name} role={student.role} />
              {onlineStatus[student.name] && <CourseProgress courseName={student.course} initialProgress={student.progress} />}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
