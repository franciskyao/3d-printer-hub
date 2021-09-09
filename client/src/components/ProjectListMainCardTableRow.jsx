import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import PropTypes from 'prop-types';

const ProjectListMainCardTableRow = function(props) {
  const { id: partId,
    project_id: projectId,
    part_name: partName,
    part_available: partAvailable,
    part_needed: partNeeded,
    part_complete: partComplete
  } = props.part;

  const [ isEditing, setIsEditing ] = useState(false);
  const [ newPartName, setNewPartName ] = useState('');
  const [ newPartAvailable, setNewPartAvailable] = useState(0);
  const [ newPartNeeded, setNewPartNeeded ] = useState(0);

  const handleDeleteButton = function() {
    axios.delete('/removeAPart', {params: {id: partId}})
      .then((success) => props.updatePartsList())
      .catch((err) => console.log(`Failed to delete part ${partId}`))
  }

  const editPartSave = function() {
    let editedName;
    let editedAvailable;
    let editedNeeded;
    let editedComplete = false;

    if (newPartName === '') {
      editedName = partName;
    } else {
      editedName = newPartName
    }

    if (newPartAvailable !== partAvailable) {
      editedAvailable = newPartAvailable
    } else {
      editedAvailable = partAvailable
    }

    if (newPartNeeded !== partNeeded) {
      editedNeeded = newPartNeeded
    } else {
      editedNeeded = partNeeded
    }

    if (newPartAvailable >= newPartNeeded) {
      editedComplete = true
    }
    // const partId = urlParams.get('partId');
    // const part_name = urlParams.get('newPartName');
    // const part_available = urlParams.get('newPartAvailable');
    // const part_needed = urlParams.get('newPartNeeded');
    // const part_complete = urlParams.get('newPartComplete');
    console.log({
      partId,
      editedName,
      editedAvailable,
      editedNeeded,
      editedComplete,
    })
    axios.get('/editAPart', {
      params: {
        partId: partId,
        newPartName: editedName,
        newPartAvailable: parseInt(editedAvailable),
        newPartNeeded: parseInt(editedNeeded),
        newPartComplete: editedComplete,
    }})
      .then((success) => {
        console.log('Successfully edited?')
        props.updatePartsList()
        setIsEditing(!isEditing)
      })
      .catch((err) => console.log(`Failed to update part ${newPartName}`))
  }

  if (isEditing) {
    return (
      <TableRow>
        <TableCell>
          <TextField
            placeholder={partName}
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
            placeholder={partAvailable}
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
            placeholder={partNeeded}
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
          <IconButton onClick={editPartSave}>
            <SaveIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  } else {
    return (
      <TableRow>
        <TableCell>{partName}</TableCell>
        <TableCell>{partAvailable}</TableCell>
        <TableCell>{partNeeded}</TableCell>
        <TableCell>{partAvailable >= partNeeded ? <CheckIcon /> : <span>Need {partNeeded - partAvailable}</span>}</TableCell>
        <TableCell>
          <IconButton onClick={handleDeleteButton}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => setIsEditing(!isEditing)}>
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }

}

export default ProjectListMainCardTableRow;