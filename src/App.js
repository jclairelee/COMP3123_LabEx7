import React, { useState } from "react";
import logo from "./logo.svg";
import Info from "./components/Info";
import "./App.css";

export default function App() {
  // Use state, then pass to child as props (meets “state or props” requirement)
  const [student] = useState({
    courseTitle: "Fullstack Development - I",
    labTitle: "React JS Programming Week09 Lab exercise",
    studentId: "100882058",
    name: "Claire Lee",
    college: "George Brown College, Toronto",
  });

  return (
    <main className="wrap">
      <img src={logo} alt="React logo" className="react-logo" />
      <h1>Welcome to {student.courseTitle}</h1>
      <h2>{student.labTitle}</h2>
      <Info {...student} />
    </main>
  );
}
