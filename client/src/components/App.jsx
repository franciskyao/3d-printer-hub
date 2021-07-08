import React, { useState, useEffect } from 'react';
import Search from './Search.jsx'
import PrinterList from './PrinterList.jsx'
import HotendList from './HotendList.jsx'
import ExtruderList from './ExtruderList.jsx'
import ProjectList from './ProjectList.jsx'
import mockData from './mockData.js'

function App() {
  const [dbList, setDbList] = useState(null);
  const [printerList, setPrinterList] = useState(null);
  const [hotendList, setHotendList] = useState(null);
  const [extruderList, setExtruderList] = useState(null);
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
  }, [setDbList])

  //searchResult = data from search? Should this be in app level?
  //dbList = data from database that needs to be sorted into their categories
  //passdown set dblist to searchResultList
  //when the user selects a category and add save
  //  update database with new entry
  //  sort database rows in their corresponding list
  //

  console.log(mockData[0])
  return (
    <div>
      <Search setDbList={setDbList}/>
      <PrinterList />
      <ExtruderList />
      <HotendList />
      <ProjectList />
    </div>
  )
}

export default App;