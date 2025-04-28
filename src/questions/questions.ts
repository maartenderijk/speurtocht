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
        type: "radio",
        question: "Welk instagram account wordt niet gevolgd door Henk de Mol",
        correctAnswer: "taylorswift",
        options: ['juttaleerdam', 'miakhalifa', 'adele', 'simoneliebregts', 'taylorswift', 'khloekardashian', 'jlo'],
        imagePath: "/speurtocht/images/q3.jpg",
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
        question: "Wat waren de namen van de twee magneetjes die Mark had?",
        correctAnswer: "mo",
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
        question: "In welk mytisch goudland had Mark er uiteindelijk toch ééntje teveel op?",
        correctAnswer: "dorado",
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
        question: "Bij welke 'Kindereren voor Kinderen fan' belandde Mark na een feestje in Spaubeek op de bank?",
        correctAnswer: "Anouk",
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
        question: "Welke straat in Neerbeek werd weekenden lang wakkergehouden door Mark en kornuiten?",
        correctAnswer: "Langweide",
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
        question: "Wat stopte Mark met carnaval soms in zijn neus?",
        correctAnswer: "tampon",
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
        question: "Welke bijnaam heeft Mark voor Spaanse taxichauffeurs?",
        correctAnswer: "conjo",
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
