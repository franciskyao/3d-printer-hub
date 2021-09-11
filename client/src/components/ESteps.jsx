import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "25ch",
  },
  calculateButton: {
    width: "25ch",
  },
}));

function ESteps() {
  const [finalEsteps, setFinalEsteps] = useState(null);
  const classes = useStyles();

  const calculate = function () {
    if (
      currentEsteps.value &&
      targetLength.value !== 0 &&
      measuredLength.value
    ) {
      const newEsteps =
        currentEsteps.value * (measuredLength.value / targetLength.value);
      setFinalEsteps(newEsteps);
    }
  };

  return (
    <>
      <TextField
        required
        label="Current E-steps"
        id="currentEsteps"
        type="number"
        className={classes.textField}
        helperText="Enter m503 command"
        margin="dense"
        variant="outlined"
        onChange={calculate}
      />
      <br />
      <TextField
        required
        label="Target Length"
        id="targetLength"
        type="number"
        className={classes.textField}
        helperText="Enter a length"
        margin="dense"
        variant="outlined"
        onChange={calculate}
      />
      <br />
      <TextField
        required
        label="Measured Length"
        id="measuredLength"
        type="number"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Use a ruler"
        margin="dense"
        variant="outlined"
        onChange={calculate}
      />
      <br />
      <br />
      {/* <Button className={classes.calculateButton}
        onClick={handleCalculateButton}
        variant="contained"
        color="primary">
          Calculate
      </Button> */}
      <p>Your new e-steps is: {finalEsteps && finalEsteps}</p>
    </>
  );
}

export default ESteps;
