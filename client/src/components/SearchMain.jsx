import React, { useState } from 'react';
import SearchResultEntry from './SearchResultEntry.jsx';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SearchMain = function(props) {
  const [customPage, setCustomPage] = useState(1);
  const {search, searchEntry, searchPage, } = props;

  const onFirstButton = function() {
    search(searchEntry, 1);
  };

  const onNextButton = function() {
    search(searchEntry, searchPage + 1);
  };

  const onPreviousButton = function() {
    if (searchPage > 1) {
      search(searchEntry, searchPage -1);
    }
  };

  const onLastButton = function() {
    console.log('Last button');
  };

  const onEnterCustomPage = function(e) {
    if (e.code === 'Enter' || e.code ==='NumpadEnter') {
      search(searchEntry, customPage);
    }
  };

  return (
    <Grid container spacing={1}>
      {props.searchResultList && props.searchResultList.map((entry) =>
        (<Grid item md={4}
          key={entry.id}>
          <SearchResultEntry
            entry={entry}
            updateList={props.updateList}/>
          </Grid>
        ))}

        <Grid container justify="center">
          <Button id="firstPage" onClick={onFirstButton} variant="contained" size="large" color="primary">
            <ArrowBackIosIcon />
            <ArrowBackIosIcon />
          </Button>
          <Button id="previousPage" onClick={onPreviousButton} variant="contained" size="large" color="primary">
            <ArrowBackIcon />
          </Button>
          <TextField
            size="dense"
            type="number"
            onKeyPress={onEnterCustomPage}
            onChange={(e) => setCustomPage(e.target.value)}/>
          <Button id="nextPage" onClick={onNextButton} variant="contained" size="large" color="primary">
            <ArrowForwardIcon />
          </Button>
          <Button id="lastPage" onClick={onLastButton} variant="contained" size="large" color="primary">
            <ArrowForwardIosIcon />
            <ArrowForwardIosIcon />
          </Button>
        </Grid>
    </Grid>
  );
};

export default SearchMain;

SearchMain.propTypes = {
  search: PropTypes.func,
  searchEntry: PropTypes.string,
  searchPage: PropTypes.number,
  searchResultList: PropTypes.array,
  updateList: PropTypes.func
};