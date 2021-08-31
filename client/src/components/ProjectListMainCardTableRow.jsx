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

const ProjectListMainCardTableRow = function(props) {
  const { id: partId,
    project_id: projectId,
    part_name: partName,
    part_available: partAvailable,
    part_needed: partNeeded,
    part_complete: partComplete
  } = props.part;

  const [ isEditingQuantity, setIsEditingQuantity ] = useState(false);
  const [ newPartName, setNewPartName ] = useState('');
  const [ newPartAvailable, setNewPartAvailable] = useState(0);
  const [ newPartNeeded, setNewPartNeeded ] = useState(0);

  const handleDeleteButton = function() {
    axios.delete('/removeAPart', {params: {id: partId}})
      .then((success) => props.updatePartsList())
      .catch((err) => console.log(`Failed to delete part ${partId}`))
  }

  const handleAddSubtractOwned = function() {
  }

  const editPartSave = function() {
  }

  if (isEditingQuantity) {
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
          <IconButton onClick={() => setIsEditingQuantity(!isEditingQuantity)}>
            <EditIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  }

}

export default ProjectListMainCardTableRow;