import "./App.css";
import Courses from "./Components/Courses";
import FeaturedCourses from "./Components/FeaturedCourses";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
function App() {
  const courses = [
    "AI",
    "Web development",
    "Web design",
    "Blockchain",
    "Cloud computing",
    "Android Development",
  ];

  const fblink = "https://web.facebook.com/kamrankhosa007";
  return (
    <div className="App">
      <Header />
      <Courses courses={courses} />
      <FeaturedCourses feturedCourses={courses}/>
      <Footer fblink={fblink}/>
    </div>
  );
}

export default App;
