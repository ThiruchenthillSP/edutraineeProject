import Head from "next/head";
import { useEffect, useState, useRef } from "react";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    window.course = function () {
      let aiContainer = document.getElementById("aiContainer");
      aiContainer.style =
        "display: flex; flex-direction: column; gap: 2vh; position: absolute; border: none; border-radius: 10px; width: 72vw; height: 83vh; top: 14vh; right: 2vw; background-color: transparent; color: white; font-family: 'Poppins', sans-serif;";
    };
    window.course();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages update
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    const botMessage = { sender: "ai", text: data.response };
    setMessages((prev) => [...prev, botMessage]);
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
          <button id="AI Chat" style = {{backgroundColor : "white", color : "black", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAIChatjs")}>AI Chat</button>
          <button id="Connect" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeConnectTrainersjs")}>Connect</button>
          <button id="Test" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeTestjs")}>Test and Assessment</button>
          <button id="Analysis" style = {{backgroundColor : "transparent", color : "white", width : "97%", height : "7vh", paddingLeft : "10px", fontSize : "15px", borderRadius : "10px" }} onClick={() => (window.location.href = "homeAnalysisjs")}>Analysis</button>
        </div>
        <div id="aiContainer">
          <h2 style={{ marginBottom: "1vh" }}>AI Chat</h2>

          <div
            ref={chatRef}
            style={{
              flex: 1,
              overflowY: "auto",
              backgroundColor: "transparent",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    maxWidth: "70%",
                    backgroundColor: msg.sender === "user" ? "#4a90e2" : "#3d3d3d",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: "15px",
                    borderBottomRightRadius: msg.sender === "user" ? "0px" : "15px",
                    borderBottomLeftRadius: msg.sender === "ai" ? "0px" : "15px",
                    fontSize: "0.95rem",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          
          <div style = {{display : "flex", alignItems : "center", justifyContent : "center"}}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                height: "2.5vw",
                width: "85%",
                padding: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                borderRadius: "10px",
              }}
              placeholder="Type your message..."
            />

            <button
              onClick={handleSend}
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "1rem",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
                width: "fit-content",
                alignSelf: "flex-end",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
