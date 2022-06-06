import React, { useState } from "react";
import Footer from "../components/Footer";
import Heaader from "../components/Heaader";

export default function Students() {
  const [students, setStudents] = useState([
    { name: "ali", class: 12 },
    { name: "awais", class: 12 },
    { name: "asif", class: 10 },
    { name: "akbar", class: 10 },
    { name: "aslam", class: 10 },
  ]);

  return (
    <div className="home-c">
      <Heaader />
      <h1>class 12</h1>
      {students
        .filter((f) => f.name === "akbar")
        .map((std) => {
          return (
            <div className="studentbox">
              <p>name = {std.name}</p>
              <p>class = {std.class}</p>
            </div>
          );
        })}

      <Footer />
    </div>
  );
}
