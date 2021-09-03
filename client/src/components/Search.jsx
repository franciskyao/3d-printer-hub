import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SearchResultEntry from './SearchResultEntry.jsx'
import mockData from './mockData.js'

function Search (props) {
  const [searchResult, setSearchResult] = useState(mockData);
  const [searchQeury, setSearchQuery] = useState(null)
  const [page, setPage] = useState(2)

  function search(e) {
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
        setSearchResult(results.data.hits)
      })
      .catch((err) => console.log(err))
  }

  function clear() {
    setSearchResult(null)
  }

  return (
    <div id="searchList">
      <label>Search Thingiverse</label><br/>
      <input type="text" id="searchThingy"></input>
      <input type="button" onClick={search} value="Search"></input>
      <input type="button" onClick={clear} value="Clear"></input>
      {searchResult && searchResult.map((entry) => <SearchResultEntry entry={entry} key={entry.id} updateList={props.updateList} />)}
    </div>
  )
}

export default Search;