import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useAuth } from '../../context/authContext';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 460,
      paddingTop:"35px",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  
const SidebarSwager = () => {
    const classes = useStyles();
    const {swaggerContent,setSwaggerContent} = useAuth()
    const [openSubList, setOpenSubList] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index,content) => {
      setSelectedIndex(index);
      setSwaggerContent(content)
    };
    const handleClick = () => {
        setOpenSubList(!openSubList);
      };
    
    return ( <>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        
        </ListSubheader>
      }
      className={classes.root}
    >
      <Typography variant="h6" style={{paddingLeft:"1rem"}}>
            Login
      </Typography>
      <ListItem button
        selected={selectedIndex === 0}
        onClick={(event) => {

          handleListItemClick(event, 0,'overview')
          }}>
        <ListItemText primary="Overview" />
      </ListItem>
      <Typography variant="h6" style={{paddingLeft:"1rem"}}>
            PATHS
      </Typography>
      <ListItem button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1,'content')}>
        <ListItemText primary="/login" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Components" />
        {openSubList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2,'schema1')}>
            <ListItemText primary="TokenData" />
          </ListItem>
          <ListItem button className={classes.nested}
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3,'schema2')}>
            <ListItemText primary="CustomObject" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    </> );
}
 
export default SidebarSwager;