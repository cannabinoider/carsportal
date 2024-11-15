"use client";
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import car1 from "@/public/Images/car1.jpg";
import car2 from "@/public/Images/car2.jpg";
import car3 from "@/public/Images/car3.jpg";

function DashboardHome() {
  const router = useRouter();
  const userName = "Duke"; 

  return (
    <Box sx={{ padding: 4 }}>
      {/* Welcome Message */}
      <Box 
        sx={{
          backgroundColor: 'black',
          color: 'white',
          padding: 2,
          borderRadius: 2,
          marginBottom: 4,
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h4">Welcome, {userName}</Typography>
      </Box>

      {/* Recent Activity and Total Cars Added Cards */}
      <Grid container spacing={3}>
        {/* Recent Activity Card */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100%' }}>
            <Typography variant="h6">Recent Activity</Typography>
            <ul>
              <li>Order #1234 has been completed.</li>
              <li>New car added to your fleet.</li>
              <li>Your last booking was completed successfully.</li>
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100%' }}>
            <Typography variant="h6">Total Cars Added</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>15</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 8 }}>
        <Carousel className=''>
          {/* <Image src={car1} height={800} width={800} alt="Image 1" /> */}
          <Image src={car2} height={800} width={800} alt="Image 2" />
          {/* <Image src={car3} height={600} width={800} alt="Image 3" /> */}
        </Carousel>
      </Box>
    </Box>
  );
}

export default DashboardHome;
