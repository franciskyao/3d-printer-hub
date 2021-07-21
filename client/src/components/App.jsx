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
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
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
      <AppBar position="fixed" className={classes.appBar}>
        {/* 3D Printer Hub */}
        {/* <Search setDbList={setDbList} updateList={updateList}/> */}
        {/* <Typography className={classes.title} variant="h6" noWrap>
          Material-UI
        </Typography> */}
        <OutlinedInput className={classes.searchInput}/>
      </AppBar>
      {/* <Drawer className={classes.drawer}>
      </Drawer> */}
      <Grid container lg={12}>
        <Grid id="monitor"  lg={2}>
          <PrinterList />
        </Grid>
        <Grid id="mainDisplay" lg={7}>
          This is going to be main display
        </Grid>
        <Grid id="list" lg={3}>
          {extruderList && <ExtruderList extruderList={extruderList} updateList={updateList}/>}
          {hotendList &&<HotendList hotendList={hotendList} updateList={updateList}/>}
          {projectList && <ProjectList projectList={projectList} updateList={updateList}/>}
        </Grid>
      </Grid>
      <div id="main">
      </div>
    </>
  )
}

export default App;