import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import PrinterAdd from './PrinterAdd.jsx';
import PrinterList from './PrinterList.jsx';
import ProjectList from './ProjectList.jsx';
import ProjectListMain from './ProjectListMain.jsx';
import ESteps from './ESteps.jsx';
import Menu from './Menu.jsx';
import BLTouch from './BLTouch.jsx';
import SearchMain from './SearchMain.jsx';
import '../style.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';


import mockData from './mockData.js';

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: 0
  },
  spacer: {
    height: 56
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
  const [projectList, setProjectList] = useState(null);
  const [searchResultList, setSearchResultList] = useState(null)
  const [mainDisplay, setMainDisplay] = useState(null);
  const [listDisplay, setListDisplay] = useState(null);
  const [projectCategories, setProjectCategories] = useState(null);
  const [searchEntry, setSearchEntry] = useState(null);
  const [searchPage, setSearchPage] = useState(1);
  const classes = useStyles();

  useEffect(() => {
    updateList();
  }, [])

  const changeMainDisplay = function(categoryToDisplay) {
    setMainDisplay(categoryToDisplay)
  }

  const changeSearchPage = function(pageNumber) {
    setSearchPage(pageNumber)
  }

  const search = function(searchInThingy, page) {
    setSearchEntry(searchInThingy)
    axios.get('/search', {
      params: {
        search: searchInThingy,
        page: page,
      }
    })
      .then((results) => {
        setSearchResultList(results.data.hits)
        changeMainDisplay('searchResults')
      })
      .catch((err) => console.log(err))
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
        setDbList(models.data.rows);
      })
      .catch((err) => console.log('Failed to get projects'))
  }

  return (
    <>
      <Grid container spacing={10}>
        <Grid container>
          <Menu
            changeMainDisplay={changeMainDisplay}
            projectCategories={projectCategories}
            search={search}
            changeSearchPage={changeSearchPage}
          />
        </Grid>
        <Grid item id="monitor" lg={2}>
        </Grid>
        <Grid item id="mainDisplay" lg={7}>
          {mainDisplay === 'blTouch'? <BLTouch updateList={updateList}/>
          : mainDisplay === 'esteps' ? <ESteps updateList={updateList}/>
          : mainDisplay === 'activePrinters' ? <PrinterList printerList={printerList} updateList={updateList}/>
          : mainDisplay === 'project' || mainDisplay === 'hotend'  || mainDisplay === 'extruder' ? <ProjectListMain projectList={dbList.filter(project => project.category === mainDisplay)}/>
          : mainDisplay === 'searchResults' ? <SearchMain
            searchResultList={searchResultList}
            updateList={updateList}
            searchEntry={searchEntry}
            search={search}/>
          :null}
        </Grid>
        <Grid item id="list" lg={3}>
          {mainDisplay === 'extruder' || mainDisplay === 'hotend' ||  mainDisplay === 'project'  ? (<ProjectList
            projectList={dbList.filter(project => project.category === mainDisplay)}
            updateList={updateList}
            category={mainDisplay}
          />)
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