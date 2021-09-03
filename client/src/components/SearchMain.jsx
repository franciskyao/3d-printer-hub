import React, { useState, useEffect } from 'react';
import SearchResultEntry from './SearchResultEntry.jsx'
import Grid from '@material-ui/core/Grid';

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
    </Grid>
  )
}

export default SearchMain;