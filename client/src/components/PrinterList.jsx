import React from 'react';
import PrinterEntry from './PrinterEntry.jsx';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function PrinterList (props) {
  return (
    <Grid container spacing={2} id="printerList">
      {props.printerList && props.printerList.map((printer) =>
        <Grid item lg={4}  key={printer}>
          <PrinterEntry printer={printer}/>
        </Grid>
      )}
    </Grid>
  );
}

export default PrinterList;

PrinterList.propTypes = {
  printerList: PropTypes.array,
};