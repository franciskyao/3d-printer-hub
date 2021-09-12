import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ProjectListMainCardTable from './ProjectListMainCardTable.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  media: {
    width: 100,
    height:100,
  },
}));

const ProjectListMainCard = function(props) {
  const [ shouldExpandPartsTable, setShouldExpandPartsTable ] = useState(false);
  const { id, proj_name: projName, preview_image: previewImage } = props.project;
  const classes = useStyles();

  return (
    <Card>
    <CardHeader
      title={projName}
    />
    <CardMedia
      image={previewImage}
      className={classes.media}
    />
    <CardActions>
      <IconButton onClick={()=> (setShouldExpandPartsTable(!shouldExpandPartsTable))}>
        {shouldExpandPartsTable ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </CardActions>
    {shouldExpandPartsTable ? <ProjectListMainCardTable id={id}/> : null}
    </Card>
  );
};

export default ProjectListMainCard;

ProjectListMainCard.propTypes = {
  project: PropTypes.object,
}