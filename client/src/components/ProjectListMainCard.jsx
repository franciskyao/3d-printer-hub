import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const ProjectListMainCard = function(props) {
  const { project } = props;
  const { proj_name: projName, preview_image: previewImage } = project
  console.log(project)
  return (
    <Card>
    <CardHeader
      title={projName}
    />
    </Card>
  )
}

export default ProjectListMainCard;