import { useState, useEffect } from "react";

export default function CourseProgress({ courseName, initialProgress }) {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
      <h3>{courseName}</h3>
      <div style={{
        backgroundColor: "#555",
        borderRadius: "5px",
        height: "10px",
        overflow: "hidden"
      }}>
        <div style={{
          backgroundColor: "#0f0",
          width: `${progress}%`,
          height: "100%"
        }}></div>
      </div>
      <p>{progress}% complete</p>
    </div>
  );
}
