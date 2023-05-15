import logo from './logo.svg';
import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import Basemap from './basemap';
import FishChallenges from './fishChallenges';
import Fish from './fish';
import Boat from './boat';
import Kiln from './kiln';
 


const App = () => {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleCloseNote = () => setOpen(false);

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Fullpage>

      <div className='dot'>
        <FullpageNavigation style={{}}> </FullpageNavigation>
      </div>

      <FullPageSections>

        <FullpageSection className='portrait' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '70vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>My name is Beatrice and I am an Alur<Button onClick={handleClick} onClose={handleCloseNote}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleCloseNote}
                message=""
                action={action}
              />
              fisherwoman from Lake Albert<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="Who in recent centuries we have also called M'vouta-N'zighé (Wutan-Zigé) among Alur people"
                action={action}
              /></Typography>
          </CardContent>
          {/* <div id='portrait'> </div> */}
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>I live in the village of Dei, at the border between Uganda and DRC.<br />Our land is in a unique place,<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message=""
                action={action}
              /> a plain enclosed between the mountain and the lake
            </Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection className='basemap' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <Typography component='div' className="notemap" sx={{ mt: 2 }}><a href='https://www.alessandromusetta.com/geo/tiles/dei/map.html' target='_blank' rel='noopener noreferrer'>Interact with the map</a></Typography>
          <Basemap />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Fish />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < FishChallenges />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Boat />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Kiln />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>For these reasons, I am forced to cultivate garden to complement my subsistence</Typography>
          </CardContent>
        </FullpageSection>


      </FullPageSections>

    </Fullpage >
  )
}


export default App;