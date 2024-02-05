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
import { useAuth } from '../../../context/authContext';
import { getPathsModals } from '../../../helpers/swagger/swaggerHelper';
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
  
const SidebarSwager = (props) => {
    const classes = useStyles();
    const [pathsList,modalsList] = getPathsModals(props.specsData)
    const {swaggerContent,setSwaggerContent} = useAuth()
    const [openComponents, setOpenComponents] = React.useState(false);
    const [openPaths, setOpenPaths] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleListItemClick = (event, index,content) => {
      setSelectedIndex(index);
      setSwaggerContent(content)
    };
    const openCollapse = (prop) => {
        prop==="component" ? setOpenComponents(!openComponents) : setOpenPaths(!openPaths)
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
      {/* overview */}
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
      {/* dropdown for paths */}
      <ListItem button onClick={()=>openCollapse('paths')}>
        <ListItemText primary="Paths" />
        {openPaths ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPaths} timeout="auto" unmountOnExit>
        {pathsList.map((path,idx) => <ListItem button className={classes.nested}
          selected={selectedIndex === idx+1}
          onClick={(event) => handleListItemClick(event, idx+1,'content')}>
          <ListItemText primary={path} />
        </ListItem>)}
      </Collapse>
      {/* dropdown for components */}
      <ListItem button onClick={()=>openCollapse('component')}>
        <ListItemText primary="Components" />
        {openComponents ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openComponents} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {modalsList.map((modal,idx)=> 
            <ListItem button className={classes.nested}
              selected={selectedIndex === (pathsList.length + idx + 1)}
              onClick={(event) => handleListItemClick(event, pathsList.length + idx + 1,'schema1')}>
              <ListItemText primary={modal} />
            </ListItem>)}
        </List>
      </Collapse>
    </List>
    </> );
}
 
export default SidebarSwager;