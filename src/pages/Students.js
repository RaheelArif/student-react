import React, { useState } from "react";
import Footer from "../components/Footer";
import Heaader from "../components/Heaader";

export default function Students() {
  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
  });
  const [students, setStudents] = useState([
    
    { name: "ali", class: 12 },
    { name: "awais", class: 12 },
    { name: "asif", class: 10 },
    { name: "akbar", class: 10 },
    { name: "aslam", class: 10 },

  ]);

  const changeValue = (e) => {
    let student = { ...newStudent };
    student[e.target.name] = e.target.value;
    setNewStudent(student);
  };

  const save = () => {
    let oldStudents = [...students];
    oldStudents.unshift(newStudent);
    setStudents(oldStudents)
  };
  return (
    <div className="home-c">
      <Heaader />

      <h1>total students = {students.length}</h1>
      <div>
        <input name="name" onChange={changeValue} placeholder="student name" />
        <input
          name="class"
          onChange={changeValue}
          placeholder="student class"
        />
        <button onClick={save}>save</button>
      </div>
      {students.map((std, i) => {
        return (
          <div key={i} className="studentbox">
            <p>
              name ={" "}
              <span className={std.name === "asif" ? "red1" : "green1"}>
                {std.name}
              </span>
            </p>

            <p>class = {std.class}</p>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
