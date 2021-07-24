import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
  const { changeMainDisplay } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            3D Printer Hub
          </Typography>
        </Toolbar>
      </AppBar>
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
            <ListItem button>
              Active 3D Printers
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('esteps')}>
              E-Step Calculator
            </ListItem>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('hotend')}>
              Hotend
            </ListItem>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('extruder')}>
              Extruder
            </ListItem>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItem button onClick={() => changeMainDisplay('project')}>
              Project
            </ListItem>
          </ListItem>
        </List>
      </Drawer>
      <br /><br /><br />
    </div>
  );
}

export default Menu;