import React, { useState } from 'react'

function PrinterEntry (props) {
  var streamUrl;
  if (props.printer[props.printer.length -1] === '/') {
    streamUrl = `${props.printer}webcam/?action=stream`;
  } else {
    streamUrl = `${props.printer}/webcam/?action=stream`;
  }
  return (
    <div>
      {props.printer}
      <br />
      <div className="video_wrapper">
        <iframe src={streamUrl} height="480" width="640"></iframe>
      </div>
    </div>
  )
}

export default PrinterEntry;