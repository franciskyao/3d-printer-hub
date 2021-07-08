import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchResultEntry from './SearchResultEntry.jsx'
import mockData from './mockData.js'

// require('dotenv').config();

function Search (props) {
  const [searchResult, setSearchResult] = useState(mockData);
  const [searchQeury, setSearchQuery] = useState(null)
  //need setDbList

  function addToDb() {
    //may not need list
    //pass function toSearchEntry
  }

  function search() {
    setSearchQuery(searchThingy.value)
    axios.get('/search', {
      params: {
        search: searchThingy.value
      }
    })
      .then((results) => {
        console.log(results.data.hits)
        setSearchResult(results.data.hits)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <input type="text" id="searchThingy"></input>
      <input type="button" onClick={search} value="Search"></input>
      {searchResult.map((entry) => <SearchResultEntry entry={entry} />)}
    </div>
  )
}

export default Search;