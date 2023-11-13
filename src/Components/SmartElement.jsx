import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Element2 from './FastElement';

function TwoColumnDivWithSpacing() {
  return (
    <Container>
      <Grid container spacing={0.5} sx={{ textAlign: 'center' }}>
        <Grid item xs={12} md={6} sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
          <div style={{ padding: '16px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div style={{ padding: '16px' }}>
                  <img src='https://static.wixstatic.com/media/d0220c_e3bf6981882c401eb9faabbc11062691~mv2.png/v1/fill/w_318,h_338,al_c,lg_1,q_85,enc_auto/d0220c_e3bf6981882c401eb9faabbc11062691~mv2.png' alt='graphic' style={{ width: '100%' }} />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginTop: '60px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div style={{ padding: '16px' }}>
            <Typography variant='h4' sx={{ fontSize: '40px', marginBottom: '20px', color: '#2F2E22' }}>Smart</Typography>
            <Typography variant='p' sx={{ fontSize: '16px', color: '#605ESE', lineHeight: '1.5' }}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Element2 />
    </Container>
  );
}

export default TwoColumnDivWithSpacing;