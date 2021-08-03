import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '25ch',
  },
  addButton: {
    width: '25ch',
  },
}));

const PrinterAdd = function () {
  const classes = useStyles();

  const addPrinter = function () {
    console.log(`Printer ${printerIp} added`)
    if (printerList.indexOf(printerIp) === -1) {
      const tempList = printerList.slice();
      tempList.push(printerIp);
      setPrinterList(tempList);
    }
  }

  return (
    <>
      <TextField
        className={classes.textField}
        required
        label="3D printer address"
        id="targetLength"
        margin="dense"
        placeholder="http://10.0.0.133/"
        variant="outlined"
        onChange={(e) => setPrinterIp(e.target.value)}
      />
      <br />
      <Button
        className={classes.addButton}
        onClick={addPrinter}
        variant="contained"
        color="primary">
          Add Printer
      </Button>
      <br />
    </>
  )
}

export default PrinterAdd;