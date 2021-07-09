import React, { useState } from 'react'

function ExtruderEntry (props) {
  const { id, proj_name, public_url: url, preview_image: img } = props.extruder
  return (
    <div>
      <a href={url}>{proj_name}</a>
    </div>
  )
}

export default ExtruderEntry;