import {
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { questionDefinition } from "./questions";

export interface QuestionProps {
  questionNumber: number;
  handleCorrectAnswer: () => void;
}

function QuestionComponent({ questionNumber, handleCorrectAnswer }: QuestionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = questionDefinition.find((q) => q.questionNumber === questionNumber);
  if (!question) return null;
  const { questions } = question ;

  const steps = ['Locatie', 'Mark']

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const currentQuestion = question.questions[activeStep];
    const isCorrect =
      currentQuestion.type === "text"
        ? answer === currentQuestion.correctAnswer
        : selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
      if (activeStep === steps.length - 1) {
        setAlert({
          type: "success",
          message: "Antwoord is correct! Er is een nieuwe locatie op de kaart toegevoegd",
        });
        setTimeout(() => {
          setAlert(null);
          handleCorrectAnswer();
        }, 3000);
      } else {
        // Move to the next question
        setAnswer("");
        setSelectedOption("");
        setActiveStep((prev) => prev + 1);
        setIsSubmitting(false);
      }
    } else {
      // Incorrect answer
      setAlert({ type: "error", message: "Helaas dat is fout" });
      setTimeout(() => {
        setAlert(null);
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return (
    <Stack spacing={2}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {alert && (
        <Alert severity={alert.type} onClose={() => setAlert(null)}>
          {alert.message}
        </Alert>
      )}

      {!alert && (
        <>
          <Typography variant="h6" gutterBottom>
            {questions[activeStep].question}
          </Typography>
          {questions[activeStep].type === "text" ? (
            <TextField
              label="Antwoord"
              variant="outlined"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              fullWidth
              disabled={isSubmitting} // Disable input while submitting
            />
          ) : (
            // RadioGroup for radio questions
            <FormControl component="fieldset">
              <RadioGroup value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {questions[activeStep].options?.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                    disabled={isSubmitting} // Disable options while submitting
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={
              (questions[activeStep].type === "text" ? !answer : !selectedOption) || isSubmitting
            } // Disable button if no input or submitting
          >
            Ok
          </Button>
        </>
      )}
    </Stack>
  );
}

export default QuestionComponent;