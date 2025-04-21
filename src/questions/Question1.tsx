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
    if (selectedOption === "Red") {
      handleCorrectAnswer()
    }
  };

  return (
    <Stack spacing={2} >
      <Typography variant="h6" gutterBottom>
        What is your favorite color?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
          <FormControlLabel value="Red" control={<Radio />} label="Red" />
          <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="Green" control={<Radio />} label="Green" />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={!selectedOption}
      >
        Submit
      </Button>
    </Stack>
  );
}

export default Question1;