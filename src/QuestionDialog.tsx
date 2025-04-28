import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";

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
        {questionNumber === 1 && <Question1 handleCorrectAnswer={handleCorrectAnswer} />}
        {questionNumber === 2 && <Question2 handleCorrectAnswer={handleCorrectAnswer} />}
      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;


