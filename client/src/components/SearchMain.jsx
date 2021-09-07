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
  const [page, setPage] = useState(1);
  const {search, searchEntry, searchPage, } = props

  //add custom page search

  const onFirstButton = function() {
    console.log('First button')
    search(searchEntry, 1);
  }

  const onNextButton = function() {
    console.log('Next button')
    search(searchEntry, searchPage + 1)
  }

  const onPreviousButton = function() {
    console.log('Previous button')
    if (searchPage > 1) {
      search(searchEntry, searchPage -1)
    }
  }

  const onLastButton = function() {
    console.log('Last button')
  }

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

        <Grid container md={12} justify="center">
          <Button id="firstPage" onClick={onFirstButton} variant="contained" size="large" color="primary">
            <ArrowBackIosIcon />
            <ArrowBackIosIcon />
          </Button>
          <Button id="previousPage" onClick={onPreviousButton} variant="contained" size="large" color="primary">
            <ArrowBackIcon />
          </Button>
          <Button id="nextPage" onClick={onNextButton} variant="contained" size="large" color="primary">
            <ArrowForwardIcon />
          </Button>
          <Button id="lastPage" onClick={onLastButton} variant="contained" size="large" color="primary">
            <ArrowForwardIosIcon />
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
    </Grid>
  )
}

export default SearchMain;