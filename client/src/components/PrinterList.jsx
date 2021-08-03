import React, { useState } from 'react'
import PrinterEntry from './PrinterEntry.jsx'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '25ch',
  },
  addButton: {
    width: '25ch',
  },
}));

function PrinterList (props) {
  const [ printerList, setPrinterList ] = useState(props.printerList)
  const classes = useStyles();
  console.log('this is printer list', printerList)

  return (
    <Grid container spacing={2} id="printerList">
      {printerList && printerList.map((printer) =>
        <Grid item lg={4}>
          <PrinterEntry printer={printer} key={printer}/>
        </Grid>
      )}
    </Grid>
  )
}

export default PrinterList;