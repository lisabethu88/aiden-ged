import { Lesson } from "../Components/LessonComponent.jsx";
import { scienceLessons, scienceQuizzes } from "../data/scienceData.js";
import braixen from "../images/dd6f9oj-99e6d1f7-7929-4202-bb07-5555667e9e8c.gif";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Quiz } from "../Components/Quiz.jsx";

export const QuizPage = () => {
  return <Quiz />;
};
