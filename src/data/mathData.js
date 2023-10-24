export const mathLessons = [
  {
    id: 2,
    subject: "math",
    title: "Order of Operations",
    introduction:
      "The order of operations is a set of rules used to determine the sequence in which mathematical operations should be performed in a given expression or equation.",
    mainPoints:
      "1. The order of operations is often remembered using the acronym PEMDAS: Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).\n2. Operations enclosed in parentheses should be performed first.\n3. Exponents should be calculated next.\n4. Multiplication and division should be performed from left to right.\n5. Addition and subtraction should be performed from left to right.",
    exampleProblems: [
      "Evaluate: 3 + (5 × 2).",
      "Simplify: 4² ÷ (2 + 2).",
      "Calculate: 6 - 2(4 + 1).",
    ],
  },
  {
    id: 3,
    subject: "math",
    title: "Ratios",
    introduction:
      "Ratios are a way of comparing two or more quantities. They are often expressed as fractions and can be used to describe relationships between different types of quantities.",
    mainPoints:
      "1. Ratios can be written in different forms, such as a:b, a/b, or a to b.\n2. Ratios should be simplified to their simplest form.\n3. Ratios can represent various relationships, such as part-to-part, part-to-whole, or whole-to-part.\n4. Proportions are equations that express equal ratios.\n5. Cross-multiplication is a method used to solve proportions.",
    exampleProblems: [
      "Express the ratio of cats to dogs as a fraction if there are 12 cats and 18 dogs.",
      "If a recipe calls for 3 cups of water and 5 cups of flour, express the ratio of water to flour.",
      "Simplify the ratio 6:12.",
    ],
  },
];

export const mathQuizzes = [
  {
    lessonId: 2,
    questions: [
      {
        id: 1,
        question: "Simplify: 7 - 3 × (4 + 2)",
        options: ["-5", "5", "19", "-19", "1"],
        correctAnswer: "-5",
      },
      {
        id: 2,
        question: "Calculate: 5² + (3 × 2) - 4",
        options: ["14", "23", "19", "16", "11"],
        correctAnswer: "16",
      },
      {
        id: 3,
        question: "Evaluate: 8 ÷ (4 - 2) + 5²",
        options: ["20", "13", "8", "10", "9"],
        correctAnswer: "29",
      },
      {
        id: 4,
        question: "Solve: 2³ - (5 × 2) + 7",
        options: ["-4", "7", "-1", "5", "8"],
        correctAnswer: "7",
      },
      {
        id: 5,
        question: "Calculate: (3 + 7) × 2 - 4²",
        options: ["-17", "17", "11", "16", "-11"],
        correctAnswer: "11",
      },
      {
        id: 6,
        question: "Evaluate: 4 × (3 - 2)² + 7",
        options: ["15", "22", "7", "18", "11"],
        correctAnswer: "22",
      },
      {
        id: 7,
        question: "Solve: 12 ÷ (4 - 2) + 5 × 3",
        options: ["11", "15", "7", "9", "13"],
        correctAnswer: "11",
      },
      {
        id: 8,
        question: "Calculate: (6 + 3) × 4 - 8 ÷ 2",
        options: ["28", "20", "26", "16", "24"],
        correctAnswer: "26",
      },
      {
        id: 9,
        question: "Evaluate: 10 × (7 - 6)² + 4",
        options: ["44", "14", "18", "24", "10"],
        correctAnswer: "24",
      },
      {
        id: 10,
        question: "Solve: 30 ÷ 3 + 6 × 2 - 4",
        options: ["16", "15", "18", "20", "12"],
        correctAnswer: "20",
      },
    ],
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 1,
        question:
          "Express the ratio of apples to oranges as a fraction if there are 24 apples and 36 oranges.",
        options: ["2/3", "3/2", "4/5", "5/4", "1/2"],
        correctAnswer: "2/3",
      },
      {
        id: 2,
        question:
          "If a recipe calls for 2 cups of milk and 5 cups of flour, express the ratio of milk to flour.",
        options: ["2:5", "5:2", "3:5", "5:3", "2:3"],
        correctAnswer: "2:5",
      },
      {
        id: 3,
        question: "Simplify the ratio 15:25.",
        options: ["3:5", "5:3", "4:5", "5:4", "3:4"],
        correctAnswer: "3:5",
      },
      {
        id: 4,
        question: "Solve for x: 4/6 = x/18.",
        options: ["12", "3", "9", "10", "7.5"],
        correctAnswer: "12",
      },
      {
        id: 5,
        question:
          "If a map has a scale of 1 inch to 25 miles, how many inches on the map represent 100 miles in real life?",
        options: ["4 inches", "3 inches", "5 inches", "6 inches", "2 inches"],
        correctAnswer: "4 inches",
      },
      {
        id: 6,
        question:
          "Express the ratio of students who like math to those who like science if there are 18 math enthusiasts and 27 science enthusiasts.",
        options: ["2/3", "3/2", "4/5", "5/4", "1/2"],
        correctAnswer: "2/3",
      },
      {
        id: 7,
        question:
          "If a bag contains 4 blue marbles and 6 green marbles, what is the ratio of blue marbles to the total number of marbles?",
        options: ["2:5", "5:2", "3:5", "5:3", "2:3"],
        correctAnswer: "2:5",
      },
      {
        id: 8,
        question: "Simplify the ratio 24:36.",
        options: ["3:5", "5:3", "4:5", "5:4", "3:4"],
        correctAnswer: "2:3",
      },
      {
        id: 9,
        question: "Solve for x: 5/10 = x/20.",
        options: ["10", "4", "15", "12", "7.5"],
        correctAnswer: "10",
      },
      {
        id: 10,
        question:
          "If a jar has a ratio of 3 red marbles to 4 blue marbles, how many blue marbles are there if there are 18 red marbles?",
        options: ["24", "14", "15", "20", "30"],
        correctAnswer: "24",
      },
    ],
  },
];
