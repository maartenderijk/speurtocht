import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, Stack } from "@mui/material";
import { useState } from "react";

export interface QuestionProps {
  handleCorrectAnswer: () => void;
}

function Question1({ handleCorrectAnswer }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === "Ajax") {
      handleCorrectAnswer()
    }
  };

  return (
    <Stack spacing={2} >
      <Typography variant="h6" gutterBottom>
        Wat is de beste voetbalclub van Nederland
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="Ajax" control={<Radio />} label="Ajax" />
          <FormControlLabel value="PSV" control={<Radio />} label="PSV" />
          <FormControlLabel value="Feyenoord" control={<Radio />} label="Feyenoord" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!selectedOption}
      >
        Ok
      </Button>
    </Stack>
  );
}

export default Question1;