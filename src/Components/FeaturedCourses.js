import React from "react";
import logo from "../logo.svg";

const FeaturedCourses = (props) => {
  const c = props.feturedCourses;
  const featuredCourses = c.filter((ftcourse) => ftcourse.length > 10);
  return (
    <div className="courses">
      <h1>Our Featured Courses</h1>
      {featuredCourses.map((fcourse) => (
        <div className="single-course">
          <img src={logo} alt="Course icon" className="course-icon" />
          <h3>{fcourse}</h3>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCourses;
