import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchResultEntry from './SearchResultEntry.jsx'
import mockData from './mockData.js'

// require('dotenv').config();

function Search (props) {
  const [searchResult, setSearchResult] = useState(mockData);
  const [searchQeury, setSearchQuery] = useState(null)
  const [page, setPage] = useState(2)
  //need setDbList

  function search(e) {
    console.log('button check')
    const button = e.target.value;
    if (button === 'Search') {
      setPage(1)
    } else if (button === 'Previous' && page > 1) {
      setPage(page - 1)
    } else if (button === 'Next') {
      setPage(page + 1)
    }
    setSearchQuery(searchThingy.value)
    axios.get('/search', {
      params: {
        search: searchThingy.value,
        page: page
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
      <input type="button" onClick={search} value="Previous"></input>
      <input type="button" onClick={search} value="Next"></input>
      <input type="text" id="searchThingy"></input>
      <input type="button" onClick={search} value="Search"></input>
      {searchResult && searchResult.map((entry) => <SearchResultEntry entry={entry} key={entry.id} updateList={props.updateList} />)}
    </div>
  )
}

export default Search;