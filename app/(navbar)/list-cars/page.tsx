"use client";
import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Dialog, DialogActions, DialogContent, DialogTitle, ImageList, ImageListItem, ImageListItemBar, Typography, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Close as CloseIcon } from '@mui/icons-material';

function ListCars() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [condition, setCondition] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      setImages(prevImages => [...prevImages, ...newImages]);
      const imageUrls = newImages.map((file) => URL.createObjectURL(file));
      setUploadedImages(prevImages => [...prevImages, ...imageUrls]);
    }
  };

  const handleSubmit = () => {
    setOpenConfirmationDialog(true);
  };

  const handleConfirm = () => {
    console.log('Car Added:', { title, description, carNumber, ownerName, images });
    setOpenConfirmationDialog(false);
    router.push('/dashboard');
  };

  const handleCloseConfirmationDialog = () => {
    setOpenConfirmationDialog(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: '2rem', padding:'1rem' }}>
        Add Car Information
      </Typography>

      <form onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Car Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Car Number"
              fullWidth
              value={carNumber}
              onChange={(e) => setCarNumber(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Owner Name"
              fullWidth
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Condition"
              fullWidth
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="outlined" component="label">
              Upload Images (Max 10)
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </Button>
          </Grid>

          {uploadedImages.length > 0 && (
            <Grid item xs={12}>
              <ImageList sx={{ width: '100%', height: 300 }} cols={5} rowHeight={164}>
                {uploadedImages.map((image, index) => (
                  <ImageListItem key={index}>
                    <img src={image} alt={`Car Image ${index + 1}`} />
                    <ImageListItemBar
                      title={`Image ${index + 1}`}
                      actionIcon={
                        <IconButton
                          sx={{ color: 'white' }}
                          onClick={() => {
                            setUploadedImages(uploadedImages.filter((_, i) => i !== index));
                            setImages(images.filter((_, i) => i !== index));
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={images.length === 0}>
              Add Car
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog open={openConfirmationDialog} onClose={handleCloseConfirmationDialog}>
        <DialogTitle>Confirm Car Details</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to add this car?</Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Title: {title}
          </Typography>
          <Typography variant="body2">
            Description: {description}
          </Typography>
          <Typography variant="body2">
            Car Number: {carNumber}
          </Typography>
          <Typography variant="body2">
            Owner: {ownerName}
          </Typography>
          <Typography variant="body2">
            Condition: {condition}
          </Typography>
          <Typography variant="body2">
            Number of Images: {images.length}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmationDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ListCars;
