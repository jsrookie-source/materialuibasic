import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { makeStyles } from '@material-ui/styles';
       const useStyles = makeStyles(() =>({
 title : {
     flexGrow:1
 },
 colorPref:{
color:'black',
backgroundColor:'grey'
 },
 login:{
    marginRight:20 
 }
       }))
const Header = () => {
    const classes =useStyles()
    return ( 
        <AppBar position='static' className={classes.colorPref}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    This is Our Header
                    </Typography>
                    <Button color='inherit' className={classes.login}>Login</Button>   
                    <BeachAccessIcon/>                 
                </Toolbar>
        </AppBar>
     );
}
 
export default Header;