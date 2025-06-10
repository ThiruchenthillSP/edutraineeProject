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
      connect.style =
        "background-color : transparent; color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      ai.style = test.style = analysis.style = connect.style;
    };

    window.ai = function () {
      let course = document.getElementById("Course");
      let ai = document.getElementById("AI Chat");
      let connect = document.getElementById("Connect");
      let test = document.getElementById("Test");
      let analysis = document.getElementById("Analysis");
      ai.style =
        "background-color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      connect.style = course.style = test.style = analysis.style =
        "background-color : transparent; color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      let courseContainer = document.getElementById("courseContainer");
      let aiContainer = document.getElementById("aiContainer");
      courseContainer.style =
        "visibility : hidden; position : absolute; border : none; border-radius : 10px; width : 72vw; height : 83vh; top : 14vh; right : 2vw;";
      aiContainer.style =
        "visibility : visible; display : flex; flex-direction : column; gap : 2vh; flex-flow: column-reverse; position : absolute; border : none; border-radius : 10px; width : 72vw; height : 83vh; top : 14vh; right : 2vw;";
    };

    window.connect = function () {
      let course = document.getElementById("Course");
      let ai = document.getElementById("AI Chat");
      let connect = document.getElementById("Connect");
      let test = document.getElementById("Test");
      let analysis = document.getElementById("Analysis");
      connect.style =
        "background-color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      ai.style = course.style = test.style = analysis.style =
        "background-color : transparent; color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
    };

    window.test = function () {
      let course = document.getElementById("Course");
      let ai = document.getElementById("AI Chat");
      let connect = document.getElementById("Connect");
      let test = document.getElementById("Test");
      let analysis = document.getElementById("Analysis");
      test.style =
        "background-color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      ai.style = connect.style = course.style = analysis.style =
        "background-color : transparent; color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
    };

    window.analysis = function () {
      let course = document.getElementById("Course");
      let ai = document.getElementById("AI Chat");
      let connect = document.getElementById("Connect");
      let test = document.getElementById("Test");
      let analysis = document.getElementById("Analysis");
      analysis.style =
        "background-color : white; width : 97%; height : 7vh; padding-left : 10px; font-size : 15px; border-radius : 10px;";
      ai.style = connect.style = course.style = test.style =
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

      {/* Your JSX/HTML content goes here */}
    </>
  );
}