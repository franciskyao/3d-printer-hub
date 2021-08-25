import React, { useState, useEffect } from 'react';
import SearchResultEntry from './SearchResultEntry.jsx'

const SearchMain = function(props) {
  console.log(props.searchResultList)
  return (
    <>
      {props.searchResultList && props.searchResultList.map((entry) => <SearchResultEntry entry={entry} updateList={props.updateList} key={entry.id}/>)}
    </>
  )
}

export default SearchMain;