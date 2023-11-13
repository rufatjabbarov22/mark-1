import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import Element4 from './FooterIcons';



function Footer() {
  return (
    <AppBar position="static" sx={{ background: "#00004D", textAlign: 'center', color: '#854DFF' }}>
      <Element4 />
      <Typography variant='p' sx={{paddingBottom:'20px'}}>© 2035 by Analytix. Powered and<br/> secured by Wix</Typography>
    </AppBar>
  

  )
}

export default Footer