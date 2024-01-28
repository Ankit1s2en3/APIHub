import { makeStyles } from '@material-ui/core';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { AuthContextProvider } from '../context/authContext';
import SubHeader from '../header/SubHeader';
function AuthenticatedLayout({ children, ...rest }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',  // Ensure the root takes full viewport height
        },
        content: {
            flex: 1,  // Allow the main content to expand and take up any available space
            backgroundColor: theme.palette.background.default,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        }
    }));
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AuthContextProvider>
                <Header />
                <SubHeader />
                <div className={classes.content}>{children}</div>
                <Footer />
            </AuthContextProvider>
        </div>

    );

}

export default AuthenticatedLayout;