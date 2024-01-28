import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useMemo, useEffect } from "react";
import { Card, Typography, Button } from '@material-ui/core';
import { CardContent, CardMedia } from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/Archive';
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import CameraIcon from '@material-ui/icons/Camera';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import PublicIcon from '@material-ui/icons/Public';
import { useAuth } from '../context/authContext';
import { FormInput, Link, List, SimpleForm, TextInput, Toolbar,useListContext,useNotify } from 'react-admin';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        // height: '100%',
        // backgroundColor: '#f4f4f4', // Light gray background to give contrast to the content cards
        // maxHeight: '100vh',
        // minHeight: '45vh',
        // padding: theme.spacing(0),
        justifyContent: 'center',
    },searchInput: {
        width: '80%', // Full width for the search input container
    },
    search: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        // height: '100%',
        // backgroundColor: '#f4f4f4', // Light gray background to give contrast to the content cards
        // maxHeight: '100vh',
        // minHeight: '45vh',
        // padding: theme.spacing(0),
        justifyContent: 'center',
        marginBottom: '84px',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        // height: '100%',
        // backgroundColor: '#f4f4f4', // Light gray background to give contrast to the content cards
        // maxHeight: '100vh',
        // minHeight: '45vh',
        // padding: theme.spacing(0),
        justifyContent: 'center',
    },
    card: {
        maxWidth: 345,
        height: 300,
        width: 300,
        backgroundColor: '#FFFFFF',  // White background
        margin: 'auto',  // Center the card
    },
    media: {
        height: 200,
        // paddingTop: '56.25%', // 16:9 aspect ratio
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262684',  // Light blue background for the icon
      },
      icon: {
        width: '100%', // Take full width of the parent
        height: '100%', // Take full height of the parent
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // Adjust 'maxWidth' and 'maxHeight' as needed to keep the icon within bounds
        maxWidth: '100px', // Max width of the icon
        maxHeight: '100px', // Max height of the icon
        color: '#FFFFFF',  // White color for the icon
        // fontSize will not be necessary if width and height are used
      },
      input: {
        '& .MuiInputBase-root': {
            display: 'flex',
            width: '100%', // Ensure the input takes full width
            border: '1px solid #ced4da', // Light grey border
            borderRadius: '4px', // Rounded corners
            padding: theme.spacing(1), // Adjusted padding
            alignItems: 'center', // Center items vertically
            '& input': {
                flexGrow: 1, // Allow input to fill space
                border: 'none', // No border for the input element
                padding: theme.spacing(1), // Padding inside the input
                '&::placeholder': { // Styling the placeholder
                    opacity: 0.6, // Placeholder opacity
                },
                '&:focus': {
                    borderColor: '#80bdff', // Blue border on focus
                    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)', // Glowing effect on focus
                },
            },
            '& .MuiInput-underline:before': {
                display: 'none', // Remove underline effect
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                display: 'none', // Remove hover effect
            },
            '& .MuiInput-underline:after': {
                display: 'none', // Remove underline after effect
            },
            '& .MuiIconButton-root': {
                marginRight: theme.spacing(1), // Spacing for the icon button
            },
        },
    },
}));
// function CustomToolbar(props ){
//   return  <Toolbar {...props} >
//         {/* Add any specific buttons you want here. Leave it empty if you want no buttons */}
//     </Toolbar>
// }


function CustomApplications(props) {
    const classes = useStyles();
    const notify = useNotify();
    const {user,setUser} = useAuth()
    // const apisList = [
    //     { id: 'public', name: 'Public API', icon: <PublicIcon  className={classes.icon}/>, description: 'Get all public Carrier Apis.' },
    //     { id: 'pim', name: 'PIM API', icon: <ArchiveIcon  className={classes.icon}/>, description: 'Get all PIM Carrier Apis.' },
    //     { id: 'pic', name: 'PIC API', icon: <SearchIcon  className={classes.icon}/>, description: 'Get all PIC Carrier Apis.' },
    //     { id: 'phdb', name: 'PHDB Serial to model API', icon: <BookIcon className={classes.icon} />, description: 'Get all PHDB Serial to model carrier api.' },
    //     { id: 'availability', name: 'Availability API', icon: <CameraIcon className={classes.icon}/>, description: 'Get all Availability carrier api.' },
    //     { id: 'internal', name: 'Internal API', icon: <EnhancedEncryptionIcon className={classes.icon}/>, description: 'Get all Internal carrier api.' },
    // ];
    const [apisList,setApisList] = useState([{ id: 'login', name: 'Public API', icon: <PublicIcon  className={classes.icon}/>, description: 'Get all public Carrier Apis.' }, ])
    
    useEffect(()=>{
        if(user){
            setApisList([...apisList,{ id: 'pic', name: 'Internal API', icon: <EnhancedEncryptionIcon className={classes.icon}/>, description: 'Get all Internal carrier api.' }])
            console.log(user)
        }
    },[apisList, classes.icon, user])
    
    const CustomToolbar = props => (
        <Toolbar {...props} style={{ display: 'none' }}> {/* This ensures it's hidden */}
        {/* intentionally left blank */}
        </Toolbar>
        );

      const [filter, setFilter] = useState('');
      useEffect(() => {
        console.log("Current filter:", filter);
      }, [filter]);
      
      const handleSearchChange = (event) => {
          // Additional check to ensure the event and value exist
          if (event?.target?.value !== undefined) {
              setFilter(event.target.value);
          } else {
              // Notify if the event is not as expected
              notify('Unexpected event structure', 'warning');
          }
      };
  
      const filteredData = useMemo(() => apisList.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    ), [apisList, filter]);
    console.log('Filtered Data:', filteredData);

    return (
        <div className={classes.root}>
        <div className={classes.search}>
        <div className={classes.searchInput}>
                    <SimpleForm toolbar={<Toolbar style={{ display: 'none' }} />}>
                        <TextInput
                            label="Search"
                            source="search" // The 'source' prop is required and must be unique and defined
                            onChange={e => setFilter(e.target.value)}
                            resettable
                            fullWidth // Ensures the input takes full width of its container
                            // Removed resettable to see if it affects the editability
                        />
                    </SimpleForm>
                </div>
        </div>
        <div className={classes.content}>
            {filteredData.map((api) => (
                <Card key={api.id} className={classes.card}>
                    <Link to={"/swagger/" + api.id}>
                        <CardMedia className={classes.media}>
                            <div className={classes.icon}>
                            {api.icon}
                            </div>
                        </CardMedia>
                        <CardContent>
                            <Typography variant="h6" component="h2">
                                {api.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {api.description}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </div>
    </div>

    );
}

export default CustomApplications;