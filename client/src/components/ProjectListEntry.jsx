import React from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import TabIcon from '@material-ui/icons/Tab';
import PropTypes from 'prop-types';

function ProjectListEntry (props) {
  const { id, proj_name, public_url: url} = props.project;

  const removeEntry = function() {
    axios.delete('/removeProject', {params: {id: id}})
      .then(() => props.updateList())
      .catch(() => console.log('Failed to remove project'));
  };

  const placeHolderFunction = function() {
    console.log('Delete icon is working');
  };

  return (
    <ListItem>
      {/* <ListItemAvatar>
        <IconButton  onClick={placeHolderFunction} edge="end" aria-label="delete">
          <TabIcon/>
        </IconButton>
      </ListItemAvatar> */}
      <ListItemText
        primary={<a onClick={(e) => {
          e.preventDefault()
          window.open(url)}} href={url}>{proj_name}</a>}
      />
      <ListItemSecondaryAction>
        <IconButton  onClick={removeEntry} edge="end" aria-label="delete">
          <DeleteIcon/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ProjectListEntry;

ProjectListEntry.propTypes = {
  project: PropTypes.object,
  id: PropTypes.number,
  proj_name: PropTypes.string,
  public_url: PropTypes.string,
  url: PropTypes.string,
  preview_image: PropTypes.string,
  img: PropTypes.string,
  updateList: PropTypes.func,
};