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
import Tree from './tree';



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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>We women are the custodians of the knowledge about ecological practices and we strive to perpetuate it. All are centred around agroforestry< br />< br /></Typography>
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

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          < Tree />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '70vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>But land is scarce; customary and collective land has almost disappeared.<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="First it was the forests that became private during the 20th century. Then the same forests were cleared for extensive and then intensive agricultural use. While initially agriculture served to feed the growing population of Dei's sub-county and the products sold to the local market, over time the profitability of some cash crops was evaluated. This has brought an end to agroforestry and drastically reduced the acreage of land available for subsistence farming, which is now critically important for the livelihoods (on average, people need one acre of land per household) of many households given the challenges being posed in the fisheries sector."
                action={action}
              /> We do not own many land, and as women our land rights are even less respected through an oppressive scheme that reproduces itself in daily life <Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="Land – its access, control and ownership – lies at the heart of power relationships within Uganda. The struggle for land is deeply intertwined with the struggle for women’s rights. Women’s access to and control over resources and economic decision making is fundamental to the achievement of their rights. Despite some progress, inequality between women and men in ownership and control of land remains stark. Cultural prohibitions against women’s ownership of land are often more powerful than statutory laws that allow women to own land. These cultural norms may determine which rights to land a woman can exercise freely. Effective statutory laws protecting land, inheritance and property rights of women including the widowed, divorced, separated or those in co-habitation are critically missing. Moreover, violence is breeding in Dei, particularly gender-based violence. There were 10 murder cases recorded between 2021 and 2022, including gender-based violence involving young people, mainly due to relationship break-ups or theft offences. Daily life hinges on violations, such as those at the landing site, where fish happened to be sold in return for transactional sex."
                action={action}
              />< br />< br /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection className='water' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>And on the land we cultivate, we suffer from the effects of climate change<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="Our seeds fail even if the soils are fertile because we can no longer count with the frequency and intensity of rainfall. Periods of prolonged drought are affecting planting and crop yields. Severe drought, especially in the first season of 2019, affected farmers who planted oranges and mangoes, because it did not allow seedlings to establish properly in the field and they eventually dried out."
                action={action}
              /><Button onClick={handleClick}>MAP</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="Since 2016, Lake Albert's water level has been rising steadily, and during the rainy season it floods a large number of fishing villages. The map shows the areas that have been flooded by water over the past five years. Lack of natural shore defences causes the lake to easily flood such flat areas."
                action={action}
              />< br />< br /></Typography>
          </CardContent>
        </FullpageSection>


      </FullPageSections>

    </Fullpage >
  )
}


export default App;