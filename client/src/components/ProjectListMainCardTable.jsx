import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import ProjectListMainCardTableRow from './ProjectListMainCardTableRow.jsx';

import mockPart from './mockPart.js';

const ProjectListMainCardTable = function(props) {
  const [ newPartName, setNewPartName ] = useState(null);
  const [ newPartAvailable, setNewPartAvailable] = useState(null);
  const [ newPartNeeded, setNewPartNeeded ] = useState(null);
  const [ newPartComplete, setNewPartComplete ] = useState(null);
  // id: 2,
  // project_id: 3,
  // part_name: "m3 screws",
  // part_available: 6,
  // part_needed: 3,
  // part_complete: false
  const [ partsList, setPartsList ] = useState(mockPart);

  const updatePartsList = function() {
    //get request to postgres
    setPartsList(mockPart);
  }

  const handleSaveButton = function() {
    //put request to postgres
  }

  useEffect(()=> (
    updatePartsList()
  ),[])

  const addPart = function () {
  }

  return (
    <>
      <Table>
      </Table>
      Should show
      {partsList.length > 0 && partsList.map((part) => (<ProjectListMainCardTableRow
        part={part}
        updatePartsList={updatePartsList}
        />))}
    </>
  )
}

export default ProjectListMainCardTable;