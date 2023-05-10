import logo from './logo.svg';
import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Basemap from './basemap';



const App = () => {


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

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
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
          backgroundColor: 'white',
          height: '80vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>My name is Beatrice and I am an Alur<Button onClick={handleClick}>^</Button>
              <Snackbar
                open={open}
                autoHideDuration={60000}
                onClose={handleClose}
                message="More than 60 percent of us fishers practise subsistence farming to supplement our livelihoods. Only slightly less than a third of us manage to subsist exclusively on fishing or fish trading. This means that some, regardless of their vocation as fishers, rely on fishing to diversify their livelihoods"
                action={action}
              />
              fisherwoman from Lake Albert<Button onClick={handleClick}>^</Button>
              <Snackbar
                open={open}
                autoHideDuration={60000}
                onClose={handleClose}
                message="Development contextual analysis p.12, RED list biodiversità o BII come immagine? O simulation CLIMA e cambiamento dell’uso del suolo?"
                action={action}
              /></Typography>
          </CardContent>
          {/* <div id='portrait'> </div> */}
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'white',
          height: '60vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>I live in the village of Dei, exactly on the administrative border between Uganda and DRC. Our land is in a unique place,<Button onClick={handleClick}>^</Button>
              <Snackbar
                open={open}
                autoHideDuration={60000}
                onClose={handleClose}
                message="Development contextual analysis p.12, RED list biodiversità o BII come immagine? O simulation CLIMA e cambiamento dell’uso del suolo?"
                action={action}
              /> a plain enclosed between the mountain and the lake
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


export default App;