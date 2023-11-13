import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

const CustomTypography = styled(Typography)`
  background-color: #F2F7FF;
  color: #061551;
`;

function RightSidebarMenu({ isOpen, toggleDrawer }) {
  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
      <List>
        <ListItem button onClick={toggleDrawer(false)}>
          Пункт меню 1
        </ListItem>
        <ListItem button onClick={toggleDrawer(false)}>
          Пункт меню 2
        </ListItem>
        <ListItem button onClick={toggleDrawer(false)}>
          Пункт меню 3
        </ListItem>
      </List>
    </Drawer>
  );
}

export default function ButtonAppBar() {
  const [isOpen, setIsOpen] = React.useState(false); // Use React.useState
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" width={{ xs: '100%' }} sx={{ background: '#00004D' }} >
        <Toolbar>
          <CustomTypography variant="h6" component="div" display="flex" justifyContent="center" alignItems="center" sx={{ width: '236px', height: '80px', marginLeft: '-23px', fontSize: '38px' }}>
            analyti<CloseIcon sx={{ color: '#854DFF', fontSize: '42px' }} />
          </CustomTypography>
          <Box display={{ xs: 'none', sm: 'inline-block', }} sx={{ marginLeft: 'auto' }}>
            <p className="Pstyle">Home</p>
            <p className="Pstyle">About</p>
            <p className="Pstyle">How it works</p>
            <p className="Pstyle">Press</p>
            <p className="Pstyle">Request demo</p>
          </Box>
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ marginLeft: 'auto' }}>
              <MenuIcon />
            </IconButton>
          )}
          {isMobile && (
            <RightSidebarMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}