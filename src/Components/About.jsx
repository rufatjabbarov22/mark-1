import React from 'react';
import Grid from '@mui/material/Grid';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function DivWithThreeParts() {
    return (
        <Grid container className='aboutGrid'spacing={2} style={{ textAlign: 'center', paddingTop: '10px', marginTop:'90px' }}>
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CloseOutlinedIcon style={{ color: '#5933AA', fontSize: '70px', marginBottom: '10px' }} />
      <h5 style={{ color: '#5933AA', fontSize: '20px' }}>Our Story</h5>
      <p style={{ fontSize: '16.5px', color: '#2F2E2E', margin: 0 }}>
        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FiberManualRecordOutlinedIcon style={{ color: '#5933AA', fontSize: '70px', marginBottom: '10px' }} />
      <h5 style={{ color: '#5933AA', fontSize: '20px' }}>Our Vision</h5>
      <p style={{ fontSize: '16.5px', color: '#2F2E2E', margin: 0 }}>
        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <div style={{ height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AddOutlinedIcon style={{ color: '#5933AA', fontSize: '70px', marginBottom: '10px' }} />
      <h5 style={{ color: '#5933AA', fontSize: '20px' }}>Technology</h5>
      <p style={{ fontSize: '16.5px', color: '#2F2E2E', margin: 0 }}>
        I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </Grid>
</Grid>
    );
}

export default DivWithThreeParts;
