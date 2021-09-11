import React from 'react';
import ProjectListEntry from './ProjectListEntry.jsx';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = function(word) {
  return word[0].toUpperCase() + word.slice(1);
};

function ProjectList (props) {

  return (
    <List id="projectList">
      <h1>{capitalizeFirstLetter(props.category)}</h1>
      {props.projectList.map((project) => <ProjectListEntry project={project} key={project.id} updateList={props.updateList} />)}
    </List>
  );
}

export default ProjectList;

ProjectList.propTypes = {
  projectList: PropTypes.array,
  updateList: PropTypes.func,
  category: PropTypes.string,
};