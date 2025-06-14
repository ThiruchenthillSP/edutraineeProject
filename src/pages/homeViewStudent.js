import Head from "next/head";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function ViewStudent() {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);

  const fetchStudent = async () => {
    try {
      const docRef = doc(db, "students", studentId.trim());
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStudentData(docSnap.data());
      } else {
        alert("Student not found!");
        setStudentData(null);
      }
    } catch (error) {
      console.error("Error fetching student:", error);
      alert("Invalid ID or Network Error");
    }
  };

  return (
    <>
      <Head>
        <title>View Student</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main style={{ padding: "3rem", fontFamily: "'Poppins', sans-serif", color: "white", backgroundColor: "#1e1e1e", height: "100vh" }}>
        <h1>View Student Details</h1>
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ padding: "1rem", fontSize: "1rem", borderRadius: "10px", marginBottom: "1rem", width: "100%" }}
        />
        <button onClick={fetchStudent} style={{ padding: "1rem", fontWeight: "bold", borderRadius: "10px", backgroundColor: "white", color: "black" }}>
          Fetch Student
        </button>

        {studentData && (
          <div style={{ marginTop: "2rem", backgroundColor: "#2a2a2a", padding: "1rem", borderRadius: "10px" }}>
            <h3>Name: {studentData.name}</h3>
            <p>Email: {studentData.email}</p>
            <p>Courses:</p>
            <ul>
              {studentData.courses.map((course, idx) => (
                <li key={idx}>{course}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </>
  );
}
