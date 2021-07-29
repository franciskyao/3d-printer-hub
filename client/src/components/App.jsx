import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import PrinterList from './PrinterList.jsx';
import HotendList from './HotendList.jsx';
import ExtruderList from './ExtruderList.jsx';
import ProjectList from './ProjectList.jsx';
import ESteps from './ESteps.jsx';
import Menu from './Menu.jsx';
import BLTouch from './BLTouch.jsx';
import mockData from './mockData.js';
import '../style.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: 0
  },
  drawer: {
    width: drawerWidth
  },
  searchInput: {
    height: 40,
    width: drawerWidth,
    backgroundColor: "white",
  }
}));

function App() {
  const [dbList, setDbList] = useState(null);
  const [printerList, setPrinterList] = useState(null);
  const [hotendList, setHotendList] = useState(null);
  const [extruderList, setExtruderList] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [mainDisplay, setMainDisplay] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    updateList()
  }, [])

  function changeMainDisplay(categoryToDisplay) {
    setMainDisplay(categoryToDisplay)
  }

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
      <Grid container spacing={10}>
        <Grid container>
          <Menu changeMainDisplay={changeMainDisplay}/>
        </Grid>
        <Grid item id="monitor"  lg={2}>
          <PrinterList />
        </Grid>
        <Grid item id="mainDisplay" lg={7}>
          This is main display
        </Grid>
        <Grid item id="list" lg={3}>
          {mainDisplay === 'extruder' && extruderList ? (<ExtruderList extruderList={extruderList} updateList={updateList}/>)
          : mainDisplay === 'hotend' && hotendList ? (<HotendList hotendList={hotendList} updateList={updateList}/>)
          : mainDisplay === 'project' && projectList ? (<ProjectList projectList={projectList} updateList={updateList}/>)
          : mainDisplay === 'esteps' ? <ESteps updateList={updateList}/>
          : mainDisplay === 'activePrinters' ? <PrinterList updateList={updateList}/>
          : mainDisplay === 'blTouch' ? <BLTouch updateList={updateList}/>
          : null}
        </Grid>activePrinters
      </Grid>
      <div id="main">
      </div>
    </>
  )
}

export default App;