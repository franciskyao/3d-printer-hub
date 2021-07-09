import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import PrinterList from './PrinterList.jsx';
import HotendList from './HotendList.jsx';
import ExtruderList from './ExtruderList.jsx';
import ProjectList from './ProjectList.jsx';
import mockData from './mockData.js';
import '../App.css';

function App() {
  const [dbList, setDbList] = useState(null);
  const [printerList, setPrinterList] = useState(null);
  const [hotendList, setHotendList] = useState(null);
  const [extruderList, setExtruderList] = useState(null);
  const [projectList, setProjectList] = useState(null);

  useEffect(() => {
    updateList()
  }, [])

  function updateList() {
    console.log('List got updated')
    axios.get('/getmodels')
      .then((models) => {
        const dataInDb = models.data.rows;
        console.log(dataInDb)
        const hotends = [];
        const extruders = [];
        const projects = [];

        dataInDb.forEach((model) => {
          if (model.category === 'hotend') {
            hotends.push(model);
          } else if (model.category === 'extruder') {
            extruders.push(model);
          } else if (model.category === 'project') {
            projects.push(model);
          }
        })
        setHotendList(hotends);
        setExtruderList(extruders);
        setProjectList(projects)
      })
      .catch((err) => console.log('Failed to get projects'))
  }

  return (
    <div id="main">
      {/* <iframe src="http://10.0.0.133/webcam/?action=stream" height="300" width="720"></iframe> */}
      <Search setDbList={setDbList} updateList={updateList}/>
      <PrinterList />
      {extruderList && <ExtruderList extruderList={extruderList}/>}
      {hotendList &&<HotendList hotendList={hotendList}/>}
      {projectList && <ProjectList projectList={projectList}/>}
    </div>
  )
}

export default App;