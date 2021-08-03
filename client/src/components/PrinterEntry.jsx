import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const cardStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 15,
    width: 'auto',
    transition: '.8s',
    backgroundColor: '#f7fbff',
    '&:hover': {
      // borderRadius: 50'
      boxShadow: '0 5px 5px 2px #00ACEE',
      transform: 'scale(1.05)'
    }
  },
  cardHeader: {
    'font-weight': 'bold',
  },
  retweet: {
    transform: 'rotate(90deg)',
  },
  cardContent: {
    '&:hover': {
      backgroundColor: '#f0f7ff',
    }
  },
  title: {
    color: 'red'
  },
  cardActionsIcons: {
    justifyContent: 'center'
  }
}));

function PrinterEntry (props) {
  const classes = cardStyles();
  var streamUrl;
  if (props.printer[props.printer.length -1] === '/') {
    streamUrl = `${props.printer}webcam/?action=stream`;
  } else {
    streamUrl = `${props.printer}/webcam/?action=stream`;
  }
  return (
    <div>
      <Card>
        <CardHeader
          title={<b>{props.printer}</b>}
        />
      </Card>
      {props.printer}
      <br />
      <div className="video_wrapper">
        <iframe src={streamUrl} height="480" width="640"></iframe>
      </div>
    </div>
  )
}

export default PrinterEntry;