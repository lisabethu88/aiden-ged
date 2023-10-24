import { Link, useParams, useLocation } from "react-router-dom";
import { scienceLessons } from "../data/scienceData.js";
import { mathLessons } from "../data/mathData.js";
import { Button } from "reactstrap";
import fennekin from "../images/Fennekin_sprite.webp";

export const Lesson = () => {
  const location = useLocation();
  const { subject, lessonId } = useParams();

  const lesson = () => {
    if (subject === "science") {
      return scienceLessons.find((lesson) => lesson.id === parseInt(lessonId));
    } else if (subject === "math") {
      console.log(
        mathLessons.find((lesson) => lesson.id === parseInt(lessonId))
      );
      return mathLessons.find((lesson) => lesson.id === parseInt(lessonId));
    } else return null;
  };

  return (
    <section className="lessons-section ">
      <div className="lesson-text">
        <h2>{lesson().title}</h2>
        <h4>Introduction: </h4>
        <p>{lesson().introduction}</p>
        <h4>Key Points: </h4>
        <p>{lesson().mainPoints}</p>

        {subject === "math" ? (
          <>
            <h4>Example Problems</h4>
            <p className="example-problems">
              {lesson().exampleProblems.join("\r\n")}
            </p>
          </>
        ) : null}

        <Link to={`${location.pathname}/quiz`}>
          <Button>Take Quiz</Button>
        </Link>
      </div>
      <img
        width="300px"
        src={fennekin}
        alt="Fennekin"
        className="lesson-image"
      />
    </section>
  );
};
