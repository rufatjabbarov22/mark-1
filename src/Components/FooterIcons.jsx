import React from 'react'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Element4() {
  return (
    <Grid container spacing={2} justifyContent='center' sx={{paddingTop:'10px', marginBottom:'10px'}} marginTop={{xs:'20px'}}>
    <Grid item>
      <IconButton>
        <FacebookIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <TwitterIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <InstagramIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton>
        <LinkedInIcon />
      </IconButton>
    </Grid>
  </Grid>
  )
}
