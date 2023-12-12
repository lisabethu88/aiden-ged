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
          <h3>Onsego - Science </h3>
          <ul>
            <li>Conduction, Convection, and Radiation</li>
            <li>Work</li>
            <li>Speed, Velocity, and Acceleration</li>
            <li>What are Forces?</li>
            <li>Forces and Newton’s Laws</li>
            <li>Energy</li>
          </ul>{" "}
          
          {/* <h3>Language Arts (Writing)</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Oct 17th by 10AM
              </em>
            </li>
            <li>Do a prompt in essay book.</li>
          </ul>
          <h3>Onsego - Math</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Dec 6th by 10am
              </em>
              <li>Decimals Test</li>
            </li>
          </ul>
          <h3>Onsego - Social Studies</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Nov 15th by 10AM
              </em>
            </li>
            <li>The Antislavery Movement</li>
            <li>Civil War Begins</li>
            <li>The Civil War Ends</li>
            <li>A Time of Invention and Business</li>
          </ul> 
          <h3>Onsego - Language Arts</h3>
          <ul>
            <li>
              <em>
                <b>DUE:</b> Dec 6th by 10AM
              </em>
            </li>
            <li>Figurative Language</li>
            <li>Tone And Mood</li>
            <li>Author’s Purpose and Figurative Language</li>
            <li>Fiction vs Nonfiction</li>
            <li>Comparing Different Genres</li>
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
