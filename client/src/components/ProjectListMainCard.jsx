import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ProjectListMainCardTable from './ProjectListMainCardTable.jsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 100,
    height:100,
  },
}));

const ProjectListMainCard = function(props) {
  const [ shouldExpandPartsTable, setShouldExpandPartsTable ] = useState(false);
  const { project } = props;
  const { proj_name: projName, preview_image: previewImage } = project;
  const classes = useStyles();

  console.log(project)
  console.log(classes)

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
    {shouldExpandPartsTable ? <ProjectListMainCardTable /> : null}
    </Card>
  )
}

export default ProjectListMainCard;