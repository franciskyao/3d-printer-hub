import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 100,
    height:100,
  },
}));

const ProjectListMainCard = function(props) {
  const { project } = props;
  const { proj_name: projName, preview_image: previewImage } = project
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
    </Card>
  )
}

export default ProjectListMainCard;