import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import QuestionComponent from "./questions/QuestionComponent";

function QuestionDialog({
  open,
  questionNumber,
  handleCorrectAnswer,
  handleClose,
}: {
  open: boolean;
  questionNumber: number;
  handleCorrectAnswer: () => void;
  handleClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Vraag {questionNumber} </DialogTitle>
      <DialogContent>
        <QuestionComponent questionNumber={questionNumber} handleCorrectAnswer={handleCorrectAnswer} />

      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;


