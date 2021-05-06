import React from "react";
import logo from "../logo.svg";
const Courses = (props) => {
  const courses = props.courses;
  return (
    <div className="courses">
      <h1>We are offering the following courses</h1>
      {courses.map((course) => (
        <div className="single-course">
          <img src={logo} alt="Course icon" className="course-icon" />
          <h3>{course}</h3>
        </div>
      ))}
    </div>
  );
};

export default Courses;
