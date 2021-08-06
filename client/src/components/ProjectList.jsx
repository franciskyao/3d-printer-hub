import React, { useState } from 'react'
import ProjectListEntry from './ProjectListEntry.jsx'
import List from '@material-ui/core/List';

function ProjectList (props) {
  return (
    <List id="projectList">
      <h1>Project List</h1>
      {props.projectList.map((project) => <ProjectListEntry project={project} key={project.id} updateList={props.updateList} />)}
    </List>
  )
}

export default ProjectList;