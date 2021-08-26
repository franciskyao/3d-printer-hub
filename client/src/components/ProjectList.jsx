import React, { useState } from 'react'
import ProjectListEntry from './ProjectListEntry.jsx'
import List from '@material-ui/core/List';

const capitalizeFirstLetter = function(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function ProjectList (props) {

  return (
    <List id="projectList">
      <h1>{capitalizeFirstLetter(props.category)}</h1>
      {props.projectList.map((project) => <ProjectListEntry project={project} key={project.id} updateList={props.updateList} />)}
    </List>
  )
}

export default ProjectList;