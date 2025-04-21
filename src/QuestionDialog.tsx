import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Question1 from "./questions/Question1";

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
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Vraag {questionNumber} </DialogTitle>
      <DialogContent>
        {questionNumber === 1 && <Question1 handleCorrectAnswer={handleCorrectAnswer}/>}
      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;


