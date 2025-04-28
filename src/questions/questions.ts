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
  {
    questionNumber: 3,
    questions: [
      {
        type: "text",
        question: "Wie vind je hier onder de grond?",
        correctAnswer: "trol",
      },
      {
        type: "text",
        question: "Hoe oud is Mark?",
        correctAnswer: "41",
      },
    ],
  },
  {
    questionNumber: 4,
    questions: [
      {
        type: "text",
        question: "Wat is het bouwjaar van dit gebouw?",
        correctAnswer: "1363",
      },
      {
        type: "text",
        question: "Hoeveel ramen heeft dit gebouw?",
        correctAnswer: "12",
      },
    ],
  },
  {
    questionNumber: 5,
    questions: [
      {
        type: "text",
        question: "Wat is de naam van de bar hier?",
        correctAnswer: "Riviera",
      },
      {
        type: "text",
        question: "Welke kleur heeft de brug hier?",
        correctAnswer: "Groen",
      },
    ],
  },
  {
    questionNumber: 6,
    questions: [
      {
        type: "text",
        question: "Wie staat centraal op deze brug?",
        correctAnswer: "Michiel",
      },
      {
        type: "text",
        question: "Hoeveel lantaarns staan er op de brug?",
        correctAnswer: "8",
      },
    ],
  },
  {
    questionNumber: 7,
    questions: [
      {
        type: "text",
        question: "Welke Amerikaanse wijk zien we?",
        correctAnswer: "Brooklyn",
      },
      {
        type: "text",
        question: "Welke kleur heeft het logo van de winkel?",
        correctAnswer: "Zwart",
      },
    ],
  },
  {
    questionNumber: 8,
    questions: [
      {
        type: "text",
        question: "Wat moet je doen als je hier binnentreed?",
        correctAnswer: "brul",
      },
      {
        type: "text",
        question: "Hoeveel stoelen staan er in de zaal?",
        correctAnswer: "200",
      },
    ],
  },
  {
    questionNumber: 9,
    questions: [
      {
        type: "text",
        question: "Wat is de naam van de kunstenaar hier?",
        correctAnswer: "Goya",
      },
      {
        type: "text",
        question: "Welke kleur heeft het schilderij?",
        correctAnswer: "Blauw",
      },
    ],
  },
  {
    questionNumber: 10,
    questions: [
      {
        type: "text",
        question: "Wat gaan we doen?",
        correctAnswer: "varen",
      },
      {
        type: "text",
        question: "Wie is de kapitein?",
        correctAnswer: "Mark",
      },
    ],
  },
];
