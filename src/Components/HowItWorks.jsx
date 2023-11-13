import { Typography } from '@mui/material';
import React from 'react';
import Element from './SmartElement';

function Working() {
  return (
    <div className='workContainer'>
      <Typography variant='h4' color='#2F2E2E' fontSize='40px' sx={{ marginTop: '50px', marginBottom: '30px' }}>
        How it works
      </Typography>
      <Element />
    </div>
  );
}

export default Working;
