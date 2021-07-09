import React, { useState } from 'react'
import PrinterEntry from './PrinterEntry.jsx'

function PrinterList () {
  const [ printerList, setPrinterList ] = useState([])
  // <iframe src="http://10.0.0.133/webcam/?action=stream" height="300" width="720"></iframe>
  const addPrinter = function () {
    const printerAddress = address.value;
    console.log(printerAddress)
    if (printerList.indexOf(printerAddress) === -1) {
      const tempList = printerList.slice();
      tempList.push(printerAddress);
      setPrinterList(tempList);
    }
  }

  // http://10.0.0.133
  return (
    <div>
      <label>Enter Printer Address:</label><br />
        <input type="text" id="address"></input>
        <input type="button" onClick={addPrinter} value="Add Printer"></input>
      <PrinterEntry />
    </div>
  )
}

export default PrinterList;