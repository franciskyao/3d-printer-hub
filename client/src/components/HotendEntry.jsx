import React, { useState } from 'react'
import axios from 'axios'

function HotendEntry (props) {
  const { id, proj_name, public_url: url, preview_image: img } = props.hotend

  const removeEntry = function() {
    axios.delete('/remove', {params: {id: id}})
      .then((success) => props.updateList())
      .catch((err) => console.log('Entry removed'))
  }

  return (
    <div>
    <input type="button" onClick={removeEntry} value="&times;"></input>
      <a href={url}>{proj_name}</a>
    </div>
  )
}

export default HotendEntry;