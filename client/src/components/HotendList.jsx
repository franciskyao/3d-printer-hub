import React, { useState } from 'react'
import HotendEntry from './HotendEntry.jsx'

function HotendList (props) {
  return (
    <div id="hotendList">
    <br />
      <h2>Hotend List</h2>
      {props.hotendList.map((hotend) => <HotendEntry hotend={hotend} key={hotend.id} updateList={props.updateList} />)}
    </div>
  )
}

export default HotendList;