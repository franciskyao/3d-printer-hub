import React, { useState } from 'react'
import PrinterEntry from './PrinterEntry.jsx'

function PrinterList () {
  const [ printerList, setPrinterList ] = useState([])
  const [ printerIp, setPrinterIp] = useState(null)

  const addPrinter = function () {
    console.log(`Printer ${printerIp} added`)
    if (printerList.indexOf(printerIp) === -1) {
      const tempList = printerList.slice();
      tempList.push(printerIp);
      setPrinterList(tempList);
    }
  }

  return (
    <div id="printerList">
      <label>Enter Printer IP:</label><br />
        <input type="text" onChange={(e) => setPrinterIp(e.target.value)}></input>
        <input type="button" onClick={addPrinter} value="Add Printer"></input>
      <h2>Active Printers</h2>
      {printerList && printerList.map((printer) => <PrinterEntry printer={printer} key={printer}/>)}
    </div>
  )
}

export default PrinterList;