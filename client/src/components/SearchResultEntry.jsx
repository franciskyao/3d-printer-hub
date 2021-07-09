import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SearchResultEntry(props) {
  const [ category, setCategory] = useState(null)
  const { name, public_url, preview_image, like_count, comment_count, creator } = props.entry;
  const { name: author } = creator;

  function addToDb() {
    console.log('Add data to db');
    axios.post('/addproject', {
      name: name,
      public_url: public_url,
      preview_image: preview_image,
      category: category
    })
      .then((success) => props.updateList())
      .catch(() => console.log('Failed to add in DB'))
  }

  return (
    <div>
      <div class="searchCard">
        <p><b>{name}</b></p>
        <img src={preview_image} alt={name}></img>
        <p>Likes: {like_count}</p>
        <p>Comments: {comment_count}</p>
      </div>
      <div>
        <select id="projectCategory" onChange={(e) => setCategory(e.target.value)}>
          <option></option>
          <option value="extruder">extruder</option>
          <option value="hotend">hotend</option>
          <option value="project">project</option>
        </select>
        <input type="button" onClick={addToDb}value="Save"></input>
      </div>
    </div>
  )
}

export default SearchResultEntry;