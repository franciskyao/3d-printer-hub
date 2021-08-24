import React, { useState }  from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import mockData from './mockData.js';

const drawerWidth = 240;
const spacer = 64;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: spacer,
    marginLeft: drawerWidth,
    display: 'block',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: 'block',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Menu = function (props) {
  const classes = useStyles();
  const { changeMainDisplay, updateSearchList } = props;
  const [searchEntry, setSearchEntry] = useState(null)

  const onSearchEnter = function(e) {
    if (e.code === 'Enter'){
      console.log('hellow',searchEntry)
      changeMainDisplay('searchResults')
      updateSearchList(mockData)

      // axios.get('/search', {
      //   params: {
      //     search: searchEntry
      //   }
      // })
      //   .then((results) => {
      //     updateSearchList(results.data.hits)
      //     setMainDisplay="searchResults"
      //   })
      //   .catch((err) => console.log(err))
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <InputBase
            onKeyPress={onSearchEnter}
            onChange={(e) => setSearchEntry(e.target.value)}
            placeholder="Search..."
          />
        </Toolbar>
      </AppBar>
      <div className={classes.appBar}>
        <Typography variant="h6" noWrap>
          3D Printer Hub
        </Typography>
      </div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('activePrinters')}>
              Active 3D Printers
            </ListItem>
          </ListItem>
        <Divider />
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('esteps')}>
              E-Step Calculator
            </ListItem>
          </ListItem>
        <Divider />
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('hotend')}>
              Hotend
            </ListItem>
          </ListItem>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('extruder')}>
              Extruder
            </ListItem>
          </ListItem>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('project')}>
              Project
            </ListItem>
          </ListItem>
        <Divider />
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('blTouch')}>
              Configuring BL-Touch
            </ListItem>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Menu;