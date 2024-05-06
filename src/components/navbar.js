import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Typography } from "@mui/material";




function Navbar(props){
    
    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={!trigger}>
            {children}
          </Slide>
        );
      }
    
      HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
      };
      
    
    
    
    
    return(
        <React.Fragment>
        <HideOnScroll {...props}>
          <AppBar sx={{backgroundColor:'white'}}>
            <Toolbar>
              <Typography color='text.secondary'>
               Welcome User
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        </React.Fragment>  
    )
}

export default Navbar;