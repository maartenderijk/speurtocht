export interface Question {
  type: "text" | "radio";
  question: string;
  correctAnswer: string;
  options?: string[];
  imagePath?: string;
}

interface QuestionDefinition {
  questionNumber: number;
  questions: Question[];
}

export const questionDefinition: QuestionDefinition[] = [
  {
    questionNumber: 1,
    questions: [
      {
        type: "text",
        question: "Op welk nummer ligt het bisschopshuis?",
        correctAnswer: "1",
      },
      {
        type: "text",
        question: "Welk merk scooter had Mark?",
        correctAnswer: "Italjet",
      },
    ],
  },
  {
    questionNumber: 2,
    questions: [
      {
        type: "text",
        question: "Welk beest staat er bovenop deze toren?",
        correctAnswer: "Draak",
        imagePath: "/speurtocht/images/q2.jpg",
      },
      {
        type: "text",
        question: "In welk straatmeubilair in Madrid heeft Mark geurineerd?",
        correctAnswer: "prullenbak",
      },
    ],
  },
];
