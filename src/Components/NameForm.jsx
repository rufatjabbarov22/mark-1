import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function NameForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField label="Name" fullWidth variant="outlined" className="myTextField" />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField label="Email" fullWidth variant="outlined" className="myTextField" />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField label="Type message here..." fullWidth multiline variant="outlined" rows={3} className="myTextField" />
      </Grid>
    </Grid>
  );
}

export default NameForm;