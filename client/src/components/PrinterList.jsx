import React, { useState } from 'react'
import PrinterEntry from './PrinterEntry.jsx'

function PrinterList () {
  const [ printerList, setPrinterList ] = useState([])
  const addPrinter = function () {
    const printerAddress = address.value;
    console.log(printerAddress)
    if (printerList.indexOf(printerAddress) === -1) {
      const tempList = printerList.slice();
      tempList.push(printerAddress);
      setPrinterList(tempList);
    }
  }

  return (
    <div id="printerList">
      <label>Enter Printer Address:</label><br />
        <input type="text" id="address" value="http://10.0.0.133"></input>
        <input type="button" onClick={addPrinter} value="Add Printer"></input>
      {printerList && printerList.map((printer) => <PrinterEntry printer={printer} />)}
    </div>
  )
}

export default PrinterList;