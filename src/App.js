import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import Basemap from './basemap';
import FishChallenges from './fishChallenges';
import Fish from './fish';
import Boat from './boat';
import Kiln from './kiln';
import Deforestation from './deforestation';
import Crop from './crop';
import Knowledge from './knowledge';
import Nonancestral from './nonancestral';



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
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>I live in the village of Dei, at the border between Uganda and DRC.<br />Our land is in a unique place, a plain enclosed between the mountain and the lake
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

        <FullpageSection className='deforestation' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Deforestation />
        </FullpageSection>


        <FullpageSection className='agro' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>So, we can no longer rely entirely on fishing. We cultivate garden to complement our subsistence<Button onClick={handleClick}>MAP</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="The map shows the areas where our gardens are clustered. Unfortunately, the ancient agro-ecological and agroforestry model has disappeared, and with difficulty, attempts are being made to reconstruct it. Biennial crops and perennial crops are largely the prevailing land use, but we are aware that this model of agricultural development has contributed to altering the climate cycle. We have paid a high price for this choice."
                action={action}
              /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Crop />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>We women are the custodians of the knowledge about ecological practices and we strive to perpetuate it<Button onClick={handleClick} onClose={handleCloseNote}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message=""
                action={action}
              /> All are centred around agroforestry< br />< br /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Knowledge />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Nonancestral />
        </FullpageSection>

      </FullPageSections>

    </Fullpage >
  )
}


export default App;