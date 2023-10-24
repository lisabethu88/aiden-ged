import { Link, useParams } from "react-router-dom";
import { scienceQuizzes } from "../data/scienceData.js";
import { mathQuizzes } from "../data/mathData.js";
import { socialStudiesQuizzes } from "../data/socialStudies.js";
import { languageArtsQuizzes } from "../data/languageArtsData.js";
import { Container, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";
import braixen2 from "../images/braixen2.gif";

export const Quiz = () => {
  const { lessonId, subject } = useParams();
  console.log(subject);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, selectedOption) => {
    const answer = { questionId, selectedOption };
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const quiz = () => {
    if (subject === "science") {
      return scienceQuizzes.find(
        (quiz) => quiz.lessonId === parseInt(lessonId)
      );
    } else if (subject === "math") {
      console.log(
        mathQuizzes.find((quiz) => quiz.lessonId === parseInt(lessonId))
      );
      return mathQuizzes.find((quiz) => quiz.lessonId === parseInt(lessonId));
    } else if (subject === "social-studies") {
      return socialStudiesQuizzes.find(
        (quiz) => quiz.lessonId === parseInt(lessonId)
      );
    } else if (subject === "language-arts") {
      return languageArtsQuizzes.find(
        (quiz) => quiz.lessonId === parseInt(lessonId)
      );
    } else return null;
  };

  const calcGrade = () => {
    let correctAnswers = 0;
    let totalQuestions = quiz().questions.length;
    for (let i = 0; i < totalQuestions; i++) {
      let questionId = quiz().questions[i].id;
      let answer = answers[questionId].selectedOption;
      console.log(answer);
      if (answer === quiz().questions[i].correctAnswer) {
        correctAnswers += 1;
      }
    }
    return (correctAnswers / totalQuestions) * 100 + "%";
  };
  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return (
    <Container className="quiz-container">
      {submitted ? (
        <div>
          <Link to={`/${subject}`}>
            <Button>
              Back to <span className="subject">{subject}</span> Lessons
            </Button>
          </Link>
          <h2>
            Results: {calcGrade()} (Don't forget to write down your grade to
            show Titi!)
          </h2>
          <ul>
            {quiz().questions.map((question) => (
              <li key={question.id}>
                <h3>
                  Question {question.id}:{" "}
                  {answers[question.id].selectedOption ===
                  question.correctAnswer
                    ? "Correct ✅"
                    : "Incorrect ❌"}
                </h3>
                <p>
                  {" "}
                  <b>Your Answer: </b>
                </p>
                {answers[question.id].selectedOption}{" "}
                <p>
                  <b>Correct Answer: </b>
                </p>
                {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          {quiz().questions.map((question, index) => (
            <FormGroup className="question-group" key={index}>
              <Label className="question" for={`question${index}`}>
                {question.question}
              </Label>
              <div>
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <Input
                      type="radio"
                      name={`question${index}`}
                      id={`question${index}_option${optionIndex}`}
                      value={option}
                      onChange={() => handleChange(question.id, option)}
                      checked={
                        answers[question.id]
                          ? answers[question.id].selectedOption === option
                          : false
                      }
                    />
                    <Label for={`question${index}_option${optionIndex}`}>
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </FormGroup>
          ))}
          <Button
            color="primary"
            type="submit"
            disabled={Object.keys(answers).length < quiz().questions.length}
          >
            Submit
          </Button>
        </Form>
      )}
      <img height="400px" src={braixen2} alt="Braixen" className="braixen2" />
    </Container>
  );
};
