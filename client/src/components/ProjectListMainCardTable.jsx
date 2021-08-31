import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import SaveIcon from '@material-ui/icons/Save';
import ProjectListMainCardTableRow from './ProjectListMainCardTableRow.jsx';

import mockPart from './mockPart.js';

const ProjectListMainCardTable = function(props) {
  const projectId = props.id;
  const [ newPartName, setNewPartName ] = useState('');
  const [ newPartAvailable, setNewPartAvailable] = useState(0);
  const [ newPartNeeded, setNewPartNeeded ] = useState(0);
  const [ newPartComplete, setNewPartComplete ] = useState(null);
  const [ partsList, setPartsList ] = useState(null);

  const updatePartsList = function() {
    axios.get('/getPartsOfProject', {
      params: {
        id: projectId,
      }
    })
    .then((results) => setPartsList(results.data.rows))
    .catch((err) => console.log(`failed to get parts of id: ${projectId}`))
  }

  const handleSaveButton = function() {
    if (newPartName && newPartAvailable && newPartNeeded) {
      axios.get('/addAPart', {
        params: {
          projectId: projectId,
          newPartName: newPartName,
          newPartAvailable: newPartAvailable,
          newPartNeeded: newPartNeeded,
          newPartComplete: newPartComplete,
        }
      })
        .then((success) => {
          updatePartsList();
          setNewPartName('')
          setNewPartAvailable(0);
          setNewPartNeeded(0);
        })
        .catch((err) => console.log('Failed to add part'))
    } else {
      console.log('Incomplete entry')
    }
  }

  useEffect(()=> (
    updatePartsList()
  ),[props.id])

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
          {Array.isArray(partsList) === true && partsList.map((part) =>(<ProjectListMainCardTableRow
          part={part}
          key={part.id}
          updatePartsList={updatePartsList}
          />))}
          <TableRow>
            <TableCell>
              <TextField
                value={newPartName}
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
                value={newPartAvailable}
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
                value={newPartNeeded}
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
            </TableCell>
            <TableCell>
              <IconButton onClick={handleSaveButton}>
                <SaveIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default ProjectListMainCardTable;