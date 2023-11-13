import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'space-between',
  paddingTop: '15px',
  paddingBottom: '15px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // На мобильных телефонах и маленьких экранах направление 'column'
  },
}));

function Infodata() {
  return (
    <Box>
      <StyledGridContainer container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <Item>
            <img src='https://static.wixstatic.com/media/d0220c_873ca1e0908148c684170a3b92d1adec~mv2.png' alt='info' />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Item>
            <img src='https://static.wixstatic.com/media/d0220c_ade649a955f948dd80fab6734006f19c~mv2.png' alt='info' />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Item>
            <img src='https://static.wixstatic.com/media/d0220c_f6170c99a84044fe9e84317826be74bf~mv2.png' alt='info' />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Item>
            <img src='https://static.wixstatic.com/media/d0220c_8e89205ada5b4e298f93b39843a49e0d~mv2.png' alt='info' />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Item>
            <img src='https://static.wixstatic.com/media/d0220c_0f50074c127141a493e18f2f7feb5044~mv2.png' alt='info' />
          </Item>
        </Grid>
      </StyledGridContainer>
    </Box>
  )
}

export default Infodata;
