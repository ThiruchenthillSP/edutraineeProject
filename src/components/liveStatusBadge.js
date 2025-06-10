import { useState, useEffect } from "react";

export default function LiveStatusBadge({ name, role }) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      setIsOnline(Math.random() > 0.5); // Simulate status
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      color: isOnline ? "#0f0" : "#999",
      padding: "0.5rem 1rem",
      borderRadius: "10px",
      fontWeight: "bold",
      fontFamily: "'Poppins', sans-serif",
      width: "fit-content"
    }}>
      {isOnline ? "*Online" : "*Offline"}
    </div>
  );
}
