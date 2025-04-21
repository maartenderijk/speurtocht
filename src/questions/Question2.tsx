import { Typography, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { QuestionProps } from "./Question1";


function Question2({ handleCorrectAnswer }: QuestionProps) {
  const [answer, setAnswer] = useState("");


  const handleButtonClick = () => {
    if (answer === "1996") {
      handleCorrectAnswer()
    }
  };

  return (
    <Stack spacing={2} >
      <Typography variant="h6" gutterBottom>
        Het geboortejaar van Mark + het huisnummer van dit gebouw?
      </Typography>
      <TextField
        label="Antwoord"
        variant="outlined"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        disabled={!answer}
      >
        Ok
      </Button>
    </Stack>
  );
}

export default Question2;