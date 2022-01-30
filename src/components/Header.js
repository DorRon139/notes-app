import React from 'react';
import Paper from '@mui/material/Paper';

const Header = () => {
  return (
    <Paper className='nav-bar-paper' square elevation={3}>
        <img style={{width: "50px", height: "50px"}} src="https://mpng.subpng.com/20180713/tre/kisspng-react-native-web-application-javascript-google-scholar-logo-5b486117ca2a66.0620183815314701038281.jpg" />
        <h1 className='site-name'>React Notes App</h1>        
    </Paper>
    );
};

export default Header;
