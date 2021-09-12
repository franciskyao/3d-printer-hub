import React from 'react';
import ProjectListMainCard from './ProjectListMainCard.jsx';
import PropTypes from 'prop-types';

const ProjectListMain = function(props) {
  const {projectList} = props;
  return (
    <>
    {projectList.map(project => (
      <ProjectListMainCard project={project} key={project.id} />
    ))}
    </>
  );
};

export default ProjectListMain;

ProjectListMain.propTypes = {
  projectList: PropTypes.array,
};