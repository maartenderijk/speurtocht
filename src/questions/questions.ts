export interface Question {
  type: "text" | "radio";
  question: string;
  correctAnswer: string;
  options?: string[];
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
        type: "radio",
        question: "Op welk nummer ligt het bisschopshuis?",
        correctAnswer: "1",
        options: ["1", "2", "3"],
      },
    ],
  },
  {
    questionNumber: 2,
    questions: [
      {
        type: "radio",
        question: "Wat is de naam van deze straat?",
        correctAnswer: "Veldstraat",
        options: ["Veldstraat", "Sint Michielsbrug", "Schouwburgstraat"],
      },
    ],
  },
];
