import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ProjectListMainCardTable from './ProjectListMainCardTable.jsx';

import mockPart from './mockPart.js';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 100,
    height:100,
  },
}));

const ProjectListMainCard = function(props) {
  const [ shouldExpandPartsTable, setShouldExpandPartsTable ] = useState(false);
  const [ partsList, setPartsList ] = useState(mockPart);
  const { project } = props;
  const { proj_name: projName, preview_image: previewImage } = project;
  const classes = useStyles();

  console.log(project)
  console.log(classes)

  const getPartsList = function() {
    //if partsList is empty
      //send get request
    //else just collapse and add
  }

  return (
    <Card>
    <CardHeader
      title={projName}
    />
    <CardMedia
      image={previewImage}
      className={classes.media}
    />
    {shouldExpandPartsTable ? <ProjectListMainCardTable partsList={partsList}/> : null}
    </Card>
  )
}

export default ProjectListMainCard;