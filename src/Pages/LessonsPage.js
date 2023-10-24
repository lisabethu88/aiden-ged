import { LessonComponent } from "../Components/LessonComponent.jsx";
import { scienceLessons } from "../data/scienceData.js";
import { mathLessons } from "../data/mathData.js";
import braixen from "../images/dd6f9oj-99e6d1f7-7929-4202-bb07-5555667e9e8c.gif";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import delphox from "../images/delphox.webp";
import { NotFound } from "./NotFound.js";

export const LessonsPage = () => {
  const { subject } = useParams();

  const getLessons = () => {
    if (subject === "science") {
      return scienceLessons;
    } else if (subject === "math") {
      return mathLessons;
    } else if (subject === "social-studies") {
      return null;
    } else if (subject === "language-arts") {
      return null;
    } else {
      return "404";
    }
  };
  const lessons = getLessons();
  console.log(lessons);
  return (
    <section className="lessons-section">
      <ul>
        {Array.isArray(lessons) ? (
          lessons.map((lesson, index) => (
            <li key={index}>
              <Link to={`/${subject}/${lesson.id}`}>
                <Button>{lesson.title}</Button>
              </Link>
            </li>
          ))
        ) : lessons === "404" ? (
          <NotFound />
        ) : (
          <li>No lessons available for {subject}</li>
        )}{" "}
        {!Array.isArray(lessons) && (
          <li>
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
          </li>
        )}
      </ul>

      <img width="auto" height="300px" src={delphox} alt="delphox" />
    </section>
  );
};
