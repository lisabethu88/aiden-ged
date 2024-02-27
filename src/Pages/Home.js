import { LessonComponent } from "../Components/LessonComponent.jsx";
import { scienceLessons, scienceQuizzes } from "../data/scienceData.js";
import braixen from "../images/dd6f9oj-99e6d1f7-7929-4202-bb07-5555667e9e8c.gif";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import arrows from "../images/arrows.gif";

export const Home = () => {
  const d = new Date();
  return (
    <main className="App">
      <section>
        <h2>
          Homework {d.getMonth() + 1}/{d.getDate()}/{d.getFullYear()}
        </h2>
        <section className="board">
          {/* <h3>Onsego - Science </h3>
          <h4>DO ALL THE QUIZZES</h4>
          <a href="https://app.onsego.com/courses/science/lessons/chemistry/">
            Link to Chemistry and Matter Module
          </a>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/science-structure-of-atoms/">
                What is an Atom?
              </a>
              <br />
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/science-structure-of-atoms/quizzes/what-is-an-atom-quiz/">
                Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/molecules/">
                Molecules
              </a>
              <br />
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/molecules/quizzes/molecules-quiz/">
                Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/states-matter/">
                States of Matter
              </a>
              <br />
              <a href="">Quiz</a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/chemical-reactions/">
                Chemical Reactions
              </a>
              <br />
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/states-matter/quizzes/state-of-matters-quiz/">
                Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/basic-properties-of-gas/">
                Properties of Gases
              </a>
              <br />
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/basic-properties-of-gas/quizzes/properties-of-gases-quiz/">
                Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/chemistry-and-matter-practice-test/">
                Chemistry and Matter Practice Test
              </a>
              <br />
              <a href="https://app.onsego.com/courses/science/lessons/chemistry/topic/chemistry-and-matter-practice-test/quizzes/chemistry-and-matter-practice-test/">
                Quiz
              </a>
            </li>
          </ul> */}
          {/* <h3>Language Arts (Writing)</h3>
          <ul>
            <li>Do a prompt in essay book.</li>
          </ul> */}
          {/* <h3>Onsego - Math</h3>
          <h2>DO THIS ENTIRE SECTION</h2>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/math/lessons/algebra-laws/">
                Three Mathematical Laws + Quizzes
              </a>
            </li>
          </ul> */}
          {/* <h3>Onsego - Social Studies</h3>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/economics-and-economic-systems/">
                Econmics and Economic Systems + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/government-and-the-economy/">
                Government and the Economy + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/the-american-economy/">
                The American Economy + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/supply-and-demand/">
                Supply and Demand + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/business-and-labor/">
                Business and Labor + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/social-studies/lessons/n1-econ/topic/economic-principles-practice-test/">
                Economic Principles Practice Test
              </a>
            </li>
          </ul> */}
          {/* <h3>Onsego - Language Arts</h3>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-long/">
                Reading Long Texts Module - 1 lesson, 1 quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/writing/">
                Writing - 5 lesson, 5 quizzes
              </a>
            </li>
          </ul> */}

          <h3>Onsego - Math</h3>
          <ul>
            <li>
              <a
                href="https://app.onsego.com/courses/math/lessons/algebra-laws/topic/math-laws-quick-review/quizzes/math-laws-quick-review-practice-test/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Three Math Laws Test
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/math/lessons/factoring/">
                Factoring Module - do all lessons and quizzes
              </a>
            </li>
          </ul>
        </section>
      </section>{" "}
      <img width="500px" src={braixen} alt="braixen" />
      <section className="lessons">
        <h2>Yummy GED Lessons</h2>
        <img width="75px" src={arrows} alt="arrows" />
        <section>
          <Link to={`/science`}>
            <Button className="lesson-btn">Science</Button>
          </Link>
        </section>{" "}
        <section>
          <Link to={`/social-studies`}>
            <Button className="lesson-btn">Social Studies</Button>
          </Link>
        </section>
        <section>
          <Link to={`/language-arts`}>
            <Button className="lesson-btn">Language Arts</Button>
          </Link>
        </section>
        <section>
          <Link to={`/math`}>
            <Button className="lesson-btn">Math</Button>
          </Link>
        </section>
      </section>{" "}
    </main>
  );
};
