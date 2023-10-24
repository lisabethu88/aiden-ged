// data.js (or any other appropriate file name)

export const scienceLessons = [
  {
    id: 3,
    subject: "science",
    title: "Cell Theory",
    introduction:
      "Cell theory is the foundation of modern biology and describes the basic unit of life. It is a set of principles that govern our understanding of cells, their structure, and their function. Cell theory has played a pivotal role in shaping the field of biology and our understanding of living organisms.",
    mainPoints:
      "Cell theory is a fundamental principle in biology, comprising the following key concepts:\n\nAll living organisms are composed of cells.\nCells are the basic unit of structure and function in organisms.\nCells can only arise from pre-existing cells.",
  },
  {
    id: 4,
    subject: "science",
    title: "Plant and Animal Cells",
    introduction:
      "Cells are the building blocks of life, and they come in various forms. Plant and animal cells are two distinct types of cells with unique characteristics. Understanding the similarities and differences between these cell types is essential for comprehending the functioning of living organisms.",
    mainPoints:
      "Plant and animal cells exhibit both similarities and differences:\n\nPlant cells have a cell wall and chloroplasts, which animal cells do not.\nAnimal cells have centrioles, while plant cells do not.\nBoth plant and animal cells have a nucleus, cell membrane, cytoplasm, mitochondria, and endoplasmic reticulum.",
  },
];

export const scienceQuizzes = [
  {
    lessonId: 3,
    questions: [
      {
        id: 1,
        question:
          "Who is credited with the discovery of cells using a simple microscope?",
        options: [
          "Charles Darwin",
          "Anton van Leeuwenhoek",
          "Robert Hooke",
          "Albert Einstein",
          "Marie Curie",
        ],
        correctAnswer: "Robert Hooke",
      },
      {
        id: 2,
        question:
          "According to cell theory, what is the basic unit of structure and function in all organisms?",
        options: ["Atoms", "Cells", "Molecules", "Tissues", "Organs"],
        correctAnswer: "Cells",
      },
      {
        id: 3,
        question:
          "What does it mean when cell theory states that 'cells can only arise from pre-existing cells'?",
        options: [
          "Cells can never die",
          "Cells can only be formed from non-living matter",
          "Cells can divide to create new cells",
          "Cells are immortal",
          "Cells cannot reproduce",
        ],
        correctAnswer: "Cells can divide to create new cells",
      },
      {
        id: 4,
        question:
          "Why is cell theory considered one of the most fundamental principles in biology?",
        options: [
          "Because it explains the origin of life on Earth",
          "Because it describes the process of evolution",
          "Because it provides the framework for understanding the structure and function of living organisms",
          "Because it was the first theory proposed in biology",
          "Because it disproved the existence of viruses",
        ],
        correctAnswer:
          "Because it provides the framework for understanding the structure and function of living organisms",
      },
      {
        id: 5,
        question:
          "Which scientist is known for his observations of cork cells under a microscope, leading to the term 'cell'?",
        options: [
          "Charles Darwin",
          "Anton van Leeuwenhoek",
          "Robert Hooke",
          "Albert Einstein",
          "Marie Curie",
        ],
        correctAnswer: "Robert Hooke",
      },
    ],
  },
  {
    lessonId: 4,
    questions: [
      {
        id: 6,
        question:
          "What is a feature unique to plant cells and not found in animal cells?",
        options: [
          "Cell membrane",
          "Cell wall",
          "Centrioles",
          "Chloroplasts",
          "Mitochondria",
        ],
        correctAnswer: "Cell wall",
      },
      {
        id: 7,
        question:
          "Which organelle is responsible for photosynthesis in plant cells?",
        options: [
          "Nucleus",
          "Chloroplasts",
          "Mitochondria",
          "Endoplasmic reticulum",
          "Golgi apparatus",
        ],
        correctAnswer: "Chloroplasts",
      },
      {
        id: 8,
        question: "What is the role of centrioles in animal cells?",
        options: [
          "Photosynthesis",
          "Cell division",
          "Energy production",
          "Protein synthesis",
          "Waste disposal",
        ],
        correctAnswer: "Cell division",
      },
      {
        id: 9,
        question:
          "Both plant and animal cells have a nucleus. What is the function of the nucleus?",
        options: [
          "Energy production",
          "Storage of water",
          "Control center of the cell, containing genetic material",
          "Site of protein synthesis",
          "Detoxification",
        ],
        correctAnswer:
          "Control center of the cell, containing genetic material",
      },
      {
        id: 10,
        question:
          "Which organelle is responsible for breaking down cellular waste and recycling materials in both plant and animal cells?",
        options: [
          "Nucleus",
          "Chloroplasts",
          "Mitochondria",
          "Lysosomes",
          "Endoplasmic reticulum",
        ],
        correctAnswer: "Lysosomes",
      },
    ],
  },
];
