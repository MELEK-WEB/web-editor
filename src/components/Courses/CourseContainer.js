import React from "react";
import "./courses.css"
import {Link} from "react-router-dom"
export default function CourseContainer({
  Title,
  image,
  description,
  teacher
  
}) {
  return (
    <div className="project">
      <h3 style={{color : "white",textAlign:"center"}}>{Title}</h3>
      <br />
      <Link to = "/App">
      <img
        src={require(`./${image}`)}
        alt={Title}
        style={{ width: "100%" }}
       
      />
      </Link>
  
      <p className="project__description">{description} Assigned by<strong style={{color : "white"}}> {teacher}</strong> </p>
     
      

      
    </div>
  );
}
