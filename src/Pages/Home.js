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
          <ul>
            <li>Energy Resources</li>
            <li>Waves</li>
            <li>Electromagnetic Radiation</li>
            <li>Physics Practice Test</li>
          </ul>{" "} */}
          {/* <h3>Language Arts (Writing)</h3>
          <ul>
            <li>Do a prompt in essay book.</li>
          </ul> */}
          <h3>Onsego - Math</h3>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/math/lessons/fractions-and-decimals/topic/fractions-decimals-vs-percents/">
                Fractions Decimals vs Percents + Quiz
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/math/lessons/fractions-and-decimals/topic/solving-percent-problems/">
                Percents + Quiz
              </a>
            </li>
          </ul>
          <h3>Onsego - Social Studies</h3>
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
          </ul>
          {/* <h3>Onsego - Language Arts</h3>
          <ul>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-analysis/topic/what-is-evidence/">
                Claim and Evidence
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-analysis/topic/visual-evidence/">
                Visual Evidence{" "}
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-analysis/topic/claim-hypotheses/">
                Evidence, Claim, and Hypotheses{" "}
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-analysis/topic/identifying-arguments/">
                Identifying Arguments{" "}
              </a>
            </li>
            <li>
              <a href="https://app.onsego.com/courses/rla/lessons/reading-analysis/topic/analyzing-arguments/">
                Analyzing and Comparing Arguments{" "}
              </a>
            </li>
          </ul> */}
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
