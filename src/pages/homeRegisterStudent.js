import Head from "next/head";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function RegisterStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [courses, setCourses] = useState([]);
  const [studentId, setStudentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "students"), {
      name,
      email,
      courses,
      createdAt: new Date().toISOString(),
    });
    setStudentId(docRef.id);
  };

  return (
    <>
      <Head>
        <title>Register Student</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main style={{ padding: "3rem", fontFamily: "'Poppins', sans-serif", color: "white", backgroundColor: "#1e1e1e", height: "100vh" }}>
        <h1>Student Registration</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <select multiple value={courses} onChange={(e) => setCourses([...e.target.selectedOptions].map(o => o.value))}>
            <option value="AI/ML">AI/ML</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Cloud Computing">Cloud Computing</option>
          </select>
          <button type="submit">Register</button>
        </form>
        {studentId && <p>✅ Registered! Student ID: {studentId}</p>}
      </main>
    </>
  );
}
