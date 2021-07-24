import React, { useState } from 'react'
import PrinterEntry from './PrinterEntry.jsx'

function PrinterList () {
  const [ printerList, setPrinterList ] = useState([])
  const addPrinter = function () {
    const printerAddress = address.value;
    address.value = ''
    console.log(`Printer ${printerAddress} added`)
    if (printerList.indexOf(printerAddress) === -1) {
      const tempList = printerList.slice();
      tempList.push(printerAddress);
      setPrinterList(tempList);
    }
  }

  return (
    <div id="printerList">
    <br />
    <br />
      <label>Enter Printer Address:</label><br />
        <input type="text" id="address"></input>
        <input type="button" onClick={addPrinter} value="Add Printer"></input>
      <h2>Active Printers</h2>
      {printerList && printerList.map((printer) => <PrinterEntry printer={printer} id={printer}/>)}
    </div>
  )
}

export default PrinterList;