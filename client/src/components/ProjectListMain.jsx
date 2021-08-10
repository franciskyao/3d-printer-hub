import React, { useState } from 'react'
import ProjectListMainCard from './ProjectListMainCard.jsx';

const ProjectListMain = function(props) {
  const {projectList} = props;
  return (
    <>
    {projectList.map(project => (
      <ProjectListMainCard project={project} key={project.id} />
    ))}
    </>
  )
}

export default ProjectListMain;