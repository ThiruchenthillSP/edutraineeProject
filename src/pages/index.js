import Image from "next/image";
import Head from "next/head";
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
  return (
    <>
      <Head>
          <title>EduTrainee</title>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <div className="nav">
            <h2 style={{color: "white"}}>EduTrainee</h2>
            <div>
                <a href="#">Home</a>
                <a href="#features">Why Us?</a>
                <a href="#pricing">Plans</a>
                <a href="#how">How it Works</a>
                <a href="homejs">Login</a>
            </div>
        </div>

        <div className="hero">
            <h1>Smarter Learning, Your Way</h1>
            <p>EduTrainee is your personal learning buddy — helping students and trainers connect, learn, chat, and grow together, all in one simple platform.</p>
            <button onClick = {() => (window.location.href='homejs')}>Jump In</button>
        </div>

        <div id="features" className="section">
            <h2>What You’ll Love</h2>
            <div className="features">
                <div className="card">
                    <h3>Easy Course Rooms</h3>
                    <ul>
                        <li>Create or join courses in seconds</li>
                        <li>Upload videos, notes & tasks</li>
                        <li>Track progress effortlessly</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Smart Help</h3>
                    <ul>
                        <li>Chat with AI to clear doubts</li>
                        <li>Instant tips & explanations</li>
                        <li>Works 24/7 like a tutor on call</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Trainer & Learner Zones</h3>
                    <ul>
                        <li>Separate dashboards</li>
                        <li>Trainer tools & learner support</li>
                        <li>Keep everyone on the same page</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Your Learning Stats</h3>
                    <ul>
                        <li>See how you're doing</li>
                        <li>Understand strengths & weak spots</li>
                        <li>Boost performance with feedback</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="how" className="section">
            <h2>How It All Works</h2>
            <div className="how-it-works">
                <p><strong>Step 1:</strong> Sign up as a student or trainer. Simple and free.</p>
                <p><strong>Step 2:</strong> Join or create course spaces, upload resources, and invite others.</p>
                <p><strong>Step 3:</strong> Use the AI Chat when stuck — it’s like having a friend who knows everything.</p>
                <p><strong>Step 4:</strong> Check your progress with smart analytics, and take tests anytime.</p>
                <p><strong>Step 5:</strong> Connect, discuss, learn — your way, your pace.</p>
            </div>
        </div>

        <div id="pricing" className="section">
            <h2>Plans That Fit Everyone</h2>
            <div className="pricing">
                <div className="card">
                    <h3>Free Forever</h3>
                    <ul>
                        <li>2 Course Rooms</li>
                        <li>Basic AI Chat</li>
                        <li>Standard Progress Tracker</li>
                        <li>Community Access</li>
                    </ul>
                    <button>Start Free</button>
                </div>
                <div className="card">
                    <h3>Pro Learner – ₹199/month</h3>
                    <ul>
                        <li>Unlimited Courses</li>
                        <li>Advanced AI Chat</li>
                        <li>Performance Analytics</li>
                        <li>Email Reminders</li>
                    </ul>
                    <button>Go Pro</button>
                </div>
                <div className="card">
                    <h3>Trainer Pro – ₹349/month</h3>
                    <ul>
                        <li>Trainer Dashboard</li>
                        <li>Student Progress Reports</li>
                        <li>AI-Powered Feedback</li>
                        <li>Custom Tests & Results</li>
                    </ul>
                    <button>Start Teaching</button>
                </div>
            </div>
        </div>
        <div className="footer">
            <p>EduTrainee © 2025</p>
        </div>
        </body>
    </>
  );
}
