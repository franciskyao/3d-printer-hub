import React, { useState, useEffect } from 'react'

function SearchResultEntry(props) {
  // console.log(props.entry)

  //need propped down addTodb
  //need name
  //need public_url
  //preview_image
  //like_count
  //comment_count
  //creator.name
  return (
    <div>
      <select id="projectCategory">
        <option value="extruder">extruder</option>
        <option value="hotend">hotend</option>
        <option value="project">project</option>
      </select>
    </div>
  )
}

export default SearchResultEntry;