import React, { useEffect, useState } from "react";
import CourseContainer from "./CourseContainer";
import axios from "axios";
import "./courses.css";
export default function Courses() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7070/api/getCourses/1").then((r) => {
      setcourses(r.data);
    });
  }, []);
  return (
    <>
      <section id="projects" className="section projects">
        <h2 className="section__title" style={{ color: "white" }}>
          Courses{" "}
        </h2>

        <div className="projects__grid">
          {courses.map((pr) => (
            <CourseContainer
              Title={pr.name}
              image={pr.img}
              description={pr.description}
              teacher={pr.teacher.name}
            />
          ))}

          <></>
        </div>
        <br></br>
      </section>
    </>
  );
}
