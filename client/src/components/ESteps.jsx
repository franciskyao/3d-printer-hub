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

const ESteps = function () {
  const [finalEsteps, setFinalEsteps] = useState(null);
  const [estepsList, setEstepsList] = useState([]);
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

  const saveEsteps = function() {
    setEstepsList(oldArray => [...oldArray, finalEsteps.toFixed(3)])
    console.log(estepsList)
  }

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
        defaultValue={0}
        className={classes.textField}
        helperText="Use a ruler"
        margin="dense"
        variant="outlined"
        onChange={calculate}
      />
      <br />
      <br />
      <Button className={classes.calculateButton}
        onClick={saveEsteps}
        variant="contained"
        color="primary">
          Save e-steps
      </Button>
      <p>Your new e-steps is: {finalEsteps && finalEsteps.toFixed(3)}</p>
      <p>Your Previous e-steps are: </p>
      {estepsList.length > 0 && estepsList.map((esteps) => <p key={esteps}>{esteps}</p>)}
    </>
  );
}

export default ESteps;
