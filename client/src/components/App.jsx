import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import PrinterAdd from './PrinterAdd.jsx';
import PrinterList from './PrinterList.jsx';
import HotendList from './HotendList.jsx';
import ExtruderList from './ExtruderList.jsx';
import ProjectList from './ProjectList.jsx';
import ESteps from './ESteps.jsx';
import Menu from './Menu.jsx';
import BLTouch from './BLTouch.jsx';
import mockData from './mockData.js';
import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: 0
  },
  drawer: {
    width: 250
  },
  searchInput: {
    height: 40,
    width: 250,
    backgroundColor: "white",
  }
}));

function App() {
  const [dbList, setDbList] = useState(null);
  const [printerList, setPrinterList] = useState([]);
  const [hotendList, setHotendList] = useState(null);
  const [extruderList, setExtruderList] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [mainDisplay, setMainDisplay] = useState(null);
  const [listDisplay, setListDisplay] = useState(null)
  const classes = useStyles();

  useEffect(() => {
    updateList()
  }, [])

  function changeMainDisplay(categoryToDisplay) {
    setMainDisplay(categoryToDisplay)
  }

  const addPrinter = function (ip) {
    if (printerList.indexOf(ip) === -1) {
      const tempList = printerList.slice();
      tempList.push(ip);
      setPrinterList(tempList);
      console.log(`Printer ${ip} added`)
    }
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
          {/* <PrinterList /> */}
        </Grid>
        <Grid item id="mainDisplay" lg={7}>
          {mainDisplay === 'blTouch'? <BLTouch updateList={updateList}/>
          : mainDisplay === 'esteps' ? <ESteps updateList={updateList}/>
          : mainDisplay === 'activePrinters' ? <PrinterList printerList={printerList} updateList={updateList}/>
          :null}
        </Grid>
        <Grid item id="list" lg={3}>
          {mainDisplay === 'extruder' && extruderList ? (<ExtruderList extruderList={extruderList} updateList={updateList}/>)
          : mainDisplay === 'hotend' && hotendList ? (<HotendList hotendList={hotendList} updateList={updateList}/>)
          : mainDisplay === 'project' && projectList ? (<ProjectList projectList={projectList} updateList={updateList}/>)
          : mainDisplay === 'activePrinters' ? (<PrinterAdd printerList={printerList} addPrinter={addPrinter}/>)
          : null}
        </Grid>
      </Grid>
      <div id="main">
      </div>
    </>
  )
}

export default App;