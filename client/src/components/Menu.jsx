import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;
const menuHeight = '56';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: menuHeight,
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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Menu = function (props) {
  const classes = useStyles();
  const { changeMainDisplay, projectCategories } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            3D Printer Hub
          </Typography>
          <TextField />
        </Toolbar>
      </AppBar>
      <div className={classes.appBar} />
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