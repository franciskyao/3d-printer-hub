import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import PrinterList from './PrinterList.jsx';
import HotendList from './HotendList.jsx';
import ExtruderList from './ExtruderList.jsx';
import ProjectList from './ProjectList.jsx';
import mockData from './mockData.js';
import '../style.css';
import Grid from '@material-ui/core/Grid';

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
    axios.get('/getmodels')
      .then((models) => {
        const dataInDb = models.data.rows;
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
    <>
      {/* top naviation to cycle through list.  */}
      <Grid>
      {/* Nav bar on top cycles through the list */}
      </Grid>
      <div id="main">
        <Search setDbList={setDbList} updateList={updateList}/>
        <PrinterList />
        {extruderList && <ExtruderList extruderList={extruderList} updateList={updateList}/>}
        {hotendList &&<HotendList hotendList={hotendList} updateList={updateList}/>}
        {projectList && <ProjectList projectList={projectList} updateList={updateList}/>}
      </div>
    </>
  )
}

export default App;