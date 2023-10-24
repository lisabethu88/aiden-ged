import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import { Lesson } from "./Components/LessonComponent";
import { LessonsPage } from "./Pages/LessonsPage";
import { LessonPage } from "./Pages/LessonPage";
import { Quiz } from "./Components/Quiz";
import { QuizPage } from "./Pages/QuizPage";
import { NotFound } from "./Pages/NotFound"; // Import the 404 component

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:subject", element: <LessonsPage /> },
        {
          path: "/:subject/:lessonId",
          element: <LessonPage />,
        },
        {
          path: "/:subject/:lessonId/quiz",
          element: <QuizPage />,
        },
        { component: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
