import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ProjectListMainCardTableRow = function(props) {
  const { project_id: projectId, part_name: partName, part_available: partAvailable, part_needed: partNeeded, part_complete: partComplete } = props.part;
  // id: 2,
  // project_id: 3,
  // part_name: "m3 screws",
  // part_available: 6,
  // part_needed: 3,
  // part_complete: false
  const { part } = props;
  return (
    <TableRow>
      <TableCell>{partName}</TableCell>
      <TableCell>{partAvailable}</TableCell>
      <TableCell>{partNeeded}</TableCell>
      <TableCell>{partComplete}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  )

}

export default ProjectListMainCardTableRow;