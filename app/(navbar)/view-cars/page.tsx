"use client";
import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, IconButton, Pagination, Paper } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, ArrowForward, ArrowBack } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';
import car1 from "@/public/Images/car1.jpg"; 
const carData = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  images: Array(10).fill("car1"),  
  title: `Car ${index + 1}`,
  description: `This is a description of Car ${index + 1}`,
  carNumber: `AB ${index + 1000}`,
  ownerName: `Owner ${index + 1}`,
}));

function ViewCars() {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 4;

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  const currentCars = carData.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage);

  return (
    <Box sx={{ padding: '2rem', margin:'2rem' }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '3rem' }}>
        View Your Cars
      </Typography>
      <Grid container spacing={5}>
        {currentCars.map((car) => (
          <Grid item xs={12} sm={6} md={3} key={car.id}>
            <Card sx={{ maxWidth: 445, margin: 'auto', padding:'2rem' }}>
              <Carousel
                showThumbs={false}
                autoPlay={false}
                showStatus={false}
                infiniteLoop
                dynamicHeight
                emulateTouch
                interval={3000}
                renderArrowPrev={(clickHandler:any) => (
                  <IconButton onClick={clickHandler} sx={{ position: 'absolute', top: '50%', left: 10, zIndex: 1 }}>
                    <ArrowBack fontSize="large" />
                  </IconButton>
                )}
                renderArrowNext={(clickHandler:any) => (
                  <IconButton onClick={clickHandler} sx={{ position: 'absolute', top: '50%', right: 10, zIndex: 1 }}>
                    <ArrowForward fontSize="large" />
                  </IconButton>
                )}
              >
                {car.images.map((image, idx) => (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`/Images/${image}.jpg`}  
                    alt={`Image of ${car.title}`}
                    key={idx}
                  />
                ))}
              </Carousel>

              <CardContent sx={{ paddingBottom: '2.5rem' }}>
                <Typography variant="h6" gutterBottom>
                  {car.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {car.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Car Number: {car.carNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Owner: {car.ownerName}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <Pagination
          count={Math.ceil(carData.length / carsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default ViewCars;
