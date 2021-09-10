import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrinterAdd from './PrinterAdd.jsx';
import PrinterList from './PrinterList.jsx';
import ProjectList from './ProjectList.jsx';
import ProjectListMain from './ProjectListMain.jsx';
import ESteps from './ESteps.jsx';
import Menu from './Menu.jsx';
import BLTouch from './BLTouch.jsx';
import SearchMain from './SearchMain.jsx';
import '../style.css';
import Grid from '@material-ui/core/Grid';

function App() {
  const [dbList, setDbList] = useState(null);
  const [printerList, setPrinterList] = useState([]);
  const [searchResultList, setSearchResultList] = useState(null)
  const [mainDisplay, setMainDisplay] = useState(null);
  const [searchEntry, setSearchEntry] = useState(null);
  const [searchPage, setSearchPage] = useState(1);

  useEffect(() => {
    updateList();
  }, []);

  const changeMainDisplay = function(categoryToDisplay) {
    setMainDisplay(categoryToDisplay);
  };

  const changeSearchPage = function(pageNumber) {
    setSearchPage(pageNumber);
  };

  const search = function(searchInThingy, page) {
    setSearchPage(page);
    setSearchEntry(searchInThingy);
    axios.get('/search', {
      params: {
        search: searchInThingy,
        page: page,
      }
    })
      .then((results) => {
        setSearchResultList(results.data.hits);
        changeMainDisplay('searchResults');
      })
      .catch((err) => console.log(err));
  };

  const addPrinter = function (ip) {
    if (printerList.indexOf(ip) === -1) {
      const tempList = printerList.slice();
      tempList.push(ip);
      setPrinterList(tempList);
      console.log(`Printer ${ip} added`);
    }
  };

  function updateList() {
    axios.get('/getmodels')
      .then((models) => {
        setDbList(models.data.rows);
      })
      .catch(() => console.log('Failed to get projects'));
  }

  return (
    <>
      <Grid container spacing={10}>
        <Grid container>
          <Menu
            changeMainDisplay={changeMainDisplay}
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
            search={search}
            changeSearchPage={changeSearchPage}
            searchPage={searchPage}/>
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
  );
}

export default App;