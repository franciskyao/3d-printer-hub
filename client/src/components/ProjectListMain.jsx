import React from 'react';
import ProjectListMainCard from './ProjectListMainCard.jsx';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const ProjectListMain = function(props) {
  const {projectList} = props;
  return (
    // <>
    <Grid container spacing={1}>
    {projectList.map(project => (
      <ProjectListMainCard project={project} key={project.id} />
    ))}
    </Grid>
    // </>
  );
};

export default ProjectListMain;

ProjectListMain.propTypes = {
  projectList: PropTypes.array,
};