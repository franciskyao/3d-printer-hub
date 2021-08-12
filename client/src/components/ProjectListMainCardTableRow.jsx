import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const ProjectListMainCardTableRow = function(props) {
  const { project_id: projectId, part_name: partName, part_available: partAvailable, part_needed: partNeeded, part_complete: partComplete } = props.part;

  const handleDeleteButton = function() {
    //delete request
    console.log('I delete this part from db');
    console.log('I update the part list')
  }

  const editPart = function() {
    //
  }

  return (
    <TableRow>
      <TableCell>{partName}</TableCell>
      <TableCell>{partAvailable}</TableCell>
      <TableCell>{partNeeded}</TableCell>
      <TableCell>{partComplete}</TableCell>
      <TableCell>
        <IconButton onClick={handleDeleteButton}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )

}

export default ProjectListMainCardTableRow;