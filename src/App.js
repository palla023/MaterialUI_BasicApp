import React from 'react';
import {AppBar, Container, ImageList, ImageListItem, TextField, Toolbar, Typography,Button} from '@material-ui/core';
import ImagesData from './ImagesData.json';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(
  {
    text:{
      "marginTop":"70px", 
      "textAlign":"center"
    }
  }
)

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <AppBar>
          <Toolbar>
            <CameraAltIcon />
            <Typography variant='h5'>Photography</Typography>
          </Toolbar>
        </AppBar>
        <Container className={classes.text} >
          <Typography variant='h3'>Our Latest Version of Photography</Typography>
          <Typography paragraph >Pleasure to take your photos as well, Please fill the below form for any invite Requests</Typography>
        </Container>
        <Container>
          <ImageList rowHeight={170} cols={3}>
          {ImagesData.map(imageObj =>
               <ImageListItem key={imageObj.id} >
                <img src={imageObj.img} alt={imageObj.title} />
               </ImageListItem>
            )} 
          </ImageList>
        </Container>
        <center>
          <Container>
            <Typography variant='h4' >Contact Form</Typography>
            <form>
              <TextField style={{"width":"500px", "margin":"5px"}} type='text' label='Name' variant='outlined' /><br/>
              <TextField style={{"width":"500px", "margin":"5px"}} type='email' label='Email' variant='outlined' /><br/>
              <TextField style={{"width":"500px", "margin":"5px"}} type='text' label='Proposal' variant='outlined' /><br/>
              <TextField style={{"width":"500px", "margin":"5px"}} type='text' label='Address' variant='outlined' /><br/>
              <Button variant='contained' color='primary' >Submit</Button>
            </form>
          </Container>
        </center>
      </div>
    </div>
  )
}

export default App
