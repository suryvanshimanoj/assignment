/* 
https://mui.com/material-ui/

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid

any extra styled then

npm install --save styled-components
*/

import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import ButtonGroup from '@mui/material/ButtonGroup';

//======================================grid
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';






function Mui_component() {

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  //======================images button
  const images = [
    {
      url: 'https://qph.cf2.quoracdn.net/main-qimg-0e9361f1d071f8eb097bbf099e9b477b-lq',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRvDJLBvYnEvhHwtaxn9W4F-yfWtCXSVTdTtrQNBjhi9149-hrD',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQdwURfkrckywkFVfbARPfkmb-DX8zciphIezBBiamShef6aljR',
      title: 'Camera',
      width: '30%',
    },
  ];
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  //==========================grid
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));






  return (
    <div>
      <h1>Mui_component</h1>
      <h1>Material UI </h1>
      <hr />

      <Button variant="text">Text</Button>
      <Button variant="contained">contained</Button>{' '}
      <Button variant="outlined">outlined</Button>
      <hr />

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>{' '}
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <hr />

      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="warning">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="info">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="primary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="dark">
        <Fingerprint />
      </IconButton>
      <hr />

      <h3>File upload</h3>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      <hr />

      <h3>Complex button</h3>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>

      <hr />
      <h3>button group</h3>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <hr />
      <h3>grid</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>



    </div>
  )
}

export default Mui_component