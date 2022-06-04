import React, { useState } from "react";
import Footer from "../components/Footer";
import Heaader from "../components/Heaader";

export default function Students() {
  const [students, setStudents] = useState(["asad", "ali", "asad"]);
//name
//age
//class
//roll number
// hint : by using object
  return (
    <div className="home-c">
      <Heaader />
      {students.map((std, i ) => {
        return <h1 key={i}>Students coming from map funtion {std} {i}</h1>;
      })}

      <Footer />
    </div>
  );
}
