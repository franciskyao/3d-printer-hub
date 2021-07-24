import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '25ch',
  },
  calculate: {
    // width: '25ch'
  },
}));

function ESteps (props) {
  const [finalEsteps, setFinalEsteps] = useState(null);
  const classes = useStyles();

  const handleCalculateButton = function() {
    const current = parseInt(currentEsteps.value);
    const target = parseInt(targetLength.value);
    const measured = parseInt(measuredLength.value);
    const newEsteps = current * (measured/target)
    setFinalEsteps(newEsteps)
  };

  return (
    <>
        <TextField
          label="Current E-steps"
          id="currentEsteps"
          type="number"
          className={classes.textField}
          helperText="Enter m503 command"
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          label="Target Length"
          id="targetLength"
          type="number"
          className={classes.textField}
          helperText="Enter a length"
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          label="Actual Measured Length"
          id="measuredLength"
          type="number"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Use a ruler"
          margin="dense"
          variant="outlined"
        />
        <br />
        <br />
        <Button className={classes.calculate} onClick={handleCalculateButton}>Calculate</Button>
        Your new e-steps is: {finalEsteps}
    </>
  )
}

export default ESteps;