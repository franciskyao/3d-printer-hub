import mockPart from './mockPart.js';
import React, { useState, useEffect } from 'react';
import ProjectListMainCardTableRow from './ProjectListMainCardTableRow.jsx';

const ProjectListMainCardTable = function(props) {
  // id: 2,
  // project_id: 3,
  // part_name: "m3 screws",
  // part_available: 6,
  // part_needed: 3,
  // part_complete: false
  const [ partsList, setPartsList ] = useState(null);

  const updatePartsList = function() {
    //get request to postgres
    setPartsList(mockPart);
  }

  useEffect(()=> (
    updatePartsList()
  ),[])

  const addPart = function () {
  }

  return (
    <>
      {partsList.length > 0 && partsList.map((part) => (<ProjectListMainCardTableRow
        part={part}
        updatePartsList={updatePartsList}
        />))}
    </>
  )
}

export default ProjectListMainCardTable;