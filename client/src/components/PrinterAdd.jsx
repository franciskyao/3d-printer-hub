import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  textField: {
    width: '25ch',
  },
  addButton: {
    width: '25ch',
  },
}));

const PrinterAdd = function (props) {
  const [ printerIp, setPrinterIp] = useState(null);
  const { addPrinter } = props;
  const classes = useStyles();

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
        onClick={() => addPrinter(printerIp)}
        variant="contained"
        color="primary">
          Add Printer
      </Button>
      <br />
    </>
  );
};

export default PrinterAdd;

PrinterAdd.propTypes = {
  addPrinter: PropTypes.func,
};