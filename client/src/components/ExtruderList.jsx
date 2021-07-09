import React, { useState } from 'react'
import ExtruderEntry from './ExtruderEntry.jsx'

function ExtruderList (props) {
  return (
    <div id="extruderList">
      {props.extruderList.map((extruder) => <ExtruderEntry extruder={extruder} key={extruder.id} updateList={props.updateList} />)}
    </div>
  )
}

export default ExtruderList;