import React, { useState } from 'react'
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

function ProjectListEntry (props) {
  const { id, proj_name, public_url: url, preview_image: img } = props.project

  const removeEntry = function() {
    axios.delete('/remove', {params: {id: id}})
      .then((success) => props.updateList())
      .catch((err) => console.log('Entry removed'))
  }

  const placeHolderFunction = function() {
    console.log('Delete icon is working')
  }

  return (
    <ListItem>
      <ListItemText
        primary={<a href={url}>{proj_name}</a>}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon onClick={placeHolderFunction}/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default ProjectListEntry;