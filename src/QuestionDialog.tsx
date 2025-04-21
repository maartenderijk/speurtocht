import { Dialog, DialogContent, Typography } from "@mui/material";

function QuestionDialog(props: {
  open: boolean;
  questionNumber: number;
  handleClose: () => void;
}) {
  const { open, questionNumber, handleClose } = props;
  return (<Dialog open={open} onClose={handleClose}>
    <DialogContent>
      <Typography variant="h6" gutterBottom>
        This is a dialog box with question {questionNumber} in it.
      </Typography>
    </DialogContent>
  </Dialog>)
}

export default QuestionDialog;