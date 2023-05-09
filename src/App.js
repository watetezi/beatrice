import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';

import Basemap from './basemap';



export default class App extends Component {
  
  render() {
    return (
      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{

          }}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '80vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography className="sentence" sx={{ mt: 2 }}>My name is Beatrice and I am an Alur fisherwoman from Lake Albert</Typography>
            </CardContent>
            <div id='portrait'> </div>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '60vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography className="sentence" sx={{ mt: 2 }}>I live in the village of Dei, exactly on the administrative border between Uganda and DRC. Our land is in a unique place, a plain enclosed between the mountain and the lake
              </Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '80vh',
            padding: '1em',
          }}>
            <Basemap />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'white',
            height: '100vh',
            padding: '1em',
          }}>3
          </FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}