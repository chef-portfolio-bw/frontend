import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { black } from "@material-ui/core/colors";


const useStyles = makeStyles({
    typography: {
        color: black[500]
    }

})


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.typography}>
                    Hearth and Stone
                </Typography>
                <Button color="inherit">Recipes</Button>
                <Button color="inherit">Profile</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};


export default Navbar