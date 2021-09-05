import React, { useState, useEffect } from 'react';
import SearchResultEntry from './SearchResultEntry.jsx'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const SearchMain = function(props) {
  return (
    <Grid container>
      {props.searchResultList && props.searchResultList.map((entry) =>
        (<Grid item md={4}>
          <SearchResultEntry
            entry={entry}
            updateList={props.updateList}
            key={entry.id}/>
          </Grid>
        ))}
        <Grid item md={12}>
          <Button variant="contained" size="large" color="primary">
            <ArrowBackIosIcon />
            <ArrowBackIosIcon />
          </Button>

          <Button variant="contained" size="large" color="primary">
            <ArrowBackIcon />
          </Button>

          <Button variant="contained" size="large" color="primary">
            <ArrowForwardIcon />
          </Button>

          <Button variant="contained" size="large" color="primary">
            <ArrowForwardIosIcon />
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
    </Grid>
  )
}

export default SearchMain;