import { Typography } from '@mui/material';
import * as React from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NameForm from './NameForm';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


function RequestDemo() {
    return (
        <div className="requestDemo">
            <Typography variant="h4" color="#42267F" sx={{ marginBottom: "20px" }}>
                <DonutLargeIcon /> Request Container
            </Typography>
            <Typography variant="h2" color="white" sx={{ marginTop: "10px", fontSize: "40px" }}>
                To schedule a product demo with one of our product consultants, please fill in your contact details{" "}
                <ChevronRightIcon sx={{ color: "#854DFF", fontSize: "40px", marginLeft: "-10px", marginBottom: "-7px" }} />
            </Typography>
            <NameForm />
            <Button variant="contained" color="secondary" sx={{ width: "50%", bgcolor: "#854DFF", borderRadius: '50px', marginTop: '20px' }}>
                Submit
            </Button>
            <Grid container sx={{ color: "#FFFFFF", padding: "20px", position: "relative" }} spacing={2}>
                <Grid item xs={12} sm={4} marginTop={5}>
                    info@mysite.com
                </Grid>
                <Grid item xs={12} sm={4} marginTop={5}>
                    Tel: 123-456-7890
                </Grid>
                <Grid item xs={12} sm={4} marginTop={5}>
                    500 Terry Francine Street
                    <br />
                    San Francisco, CA 94158
                </Grid>
            </Grid>
        </div>
    );
}

export default RequestDemo;

  