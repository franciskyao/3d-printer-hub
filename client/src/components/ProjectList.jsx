import React, { useState } from 'react'
import ProjectEntry from './ProjectEntry.jsx'

function ProjectList (props) {
  return (
    <div id="projectList">
    <br />
      <h2>Project List</h2>
      {props.projectList.map((project) => <ProjectEntry project={project} key={project.id} updateList={props.updateList} />)}
    </div>
  )
}

export default ProjectList;