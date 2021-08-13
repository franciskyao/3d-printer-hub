import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ProjectListMainCardTableRow from './ProjectListMainCardTableRow.jsx';

import mockPart from './mockPart.js';

const ProjectListMainCardTable = function(props) {
  const projectId = props.id;
  const [ newPartName, setNewPartName ] = useState(null);
  const [ newPartAvailable, setNewPartAvailable] = useState(null);
  const [ newPartNeeded, setNewPartNeeded ] = useState(null);
  const [ newPartComplete, setNewPartComplete ] = useState(null);
  const [ partsList, setPartsList ] = useState(mockPart);
  // id: 2,
  // project_id: 3,
  // part_name: "m3 screws",
  // part_available: 6,
  // part_needed: 3,
  // part_complete: false

  const updatePartsList = function() {
    axios.get('/getPartsOfProject', {
      params: {
        id: projectId,
      }
    })
    //get request to postgres
    // setPartsList(mockPart);
  }

  const handleSaveButton = function() {
    //need id
    //put request to postgres
  }

  useEffect(()=> (
    updatePartsList()
  ),[props.id])

  const addPart = function () {
  }

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Part Name</TableCell>
            <TableCell>Quantity Owned</TableCell>
            <TableCell>Quantity Needed</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {partsList && partsList.map((part) =>(<ProjectListMainCardTableRow
          part={part}
          key={part.id}
          updatePartsList={updatePartsList}
          />))}
          <TableRow>
            <TableCell>
              <TextField
                placeholder="Enter Part Name"
                margin="dense"
                variant="outlined"
                onChange={(e)=> {
                  setNewPartName(e.target.value)
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                placeholder="Enter Amount Available"
                margin="dense"
                variant="outlined"
                onChange={(e)=> {
                  setNewPartAvailable(e.target.value)
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                placeholder="Enter Amount Needed"
                margin="dense"
                variant="outlined"
                onChange={(e)=> {
                  setNewPartNeeded(e.target.value)
                }}
              />
            </TableCell>
            <TableCell>
              <TextField
                placeholder="Enter Part Name"
                margin="dense"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <IconButton onClick={handleSaveButton}>
                <AddIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default ProjectListMainCardTable;