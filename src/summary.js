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
import PamellaFish from './pamella_fish';
import PamellaFishChallenges from './pamella_fishChallenges';
import Boat from './boat';
import Kiln from './kiln';
import PamellaDeforestation from './pamella_deforestation';
import PamellaCrop from './pamella_crop';
import Knowledge from './knowledge';
import PamellaNonancestral from './pamella_nonancestral';
import PamellaTree from './pamella_tree'



const Summary = () => {

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
    <><div className='logo'></div>

      <Fullpage>

        <div className='dot'>
          <FullpageNavigation style={{}}> </FullpageNavigation>
        </div>

        <FullPageSections>

          <FullpageSection className='portrait' style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '90vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}><i>Morembe</i>, my name is Beatrice, an Alur fisherwoman at Dei Landing site.<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleClose}
                  message="Dei landing site is on the Lake Albert. We call the lake by the name of M'vouta-N'zighé (Wutan-Zigé) as spoken in the Alur language and the dialect of the lower lands, the Jonam. The north-western shore of the lake is our ancestral land, since we anciently migrated with other Luo groups from the confluence of the Nile River and Bahr-el-Ghazel (today Sudan), our homeland, to settle in this area. Morembe, is how I bring greetings."
                  action={action} /> My home, Dei village is uniquely located between a mountain and the Lake Albert. I was born and raised here. But one of may parents-my mother- is an immigrant from DRC</Typography>
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
            <PamellaFish />
          </FullpageSection>


          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '40vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>In our group, some of us used to own boats; while others were only vendors of fish. In early 2020  there were over 600 boats at this site but now they are only about 100 boats. Things have changed since the government put a ban on fishing on Lake Albert<br /><br /></Typography>
            </CardContent>
          </FullpageSection>


          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <PamellaFishChallenges />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We know that cutting down of trees to get fuelwood for smoking our fish is destructive to our forest resources. We are thankful for the work that Environmental Defenders has done in helping us to restore the forest resources. in our women's group we are trying to preserve the following important tree species:<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <Knowledge />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <PamellaNonancestral />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <PamellaTree />
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}><br /><br />When I am not out in the Lake fishing, I am together with my women's group members at the landing site, smoking, salting and sun drying our fish. But we now do not get much out of fishing business. So, many of us have now taken on cultivation as a means of supplementing the fish business<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <PamellaCrop />
          </FullpageSection>

          <FullpageSection className='agro' style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We have the indigenous knowledge on the preservation of the seeds but Environmental Defenders is helping us to  do it better and on a bigger scale<Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleClose}
                  message="The map shows the areas where our gardens are clustered. Unfortunately, the ancient agro-ecological and agroforestry model has disappeared, and with difficulty, attempts are being made to reconstruct it. Biennial crops and perennial crops are largely the prevailing land use, but we are aware that this model of agricultural development has contributed to altering the climate cycle. We have paid a high price for this choice."
                  action={action} /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>However, land is very scarce here in Dei. If you are an immigrant, you can access land through renting it. But it expensive to rent, so you end up cultivating on a small area. Those who are natives also face a problem because the culture does not permit women to own land, they can only use it. Women on customary lands only access it through their male relatives<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='water' style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We experience a lot of dry spells and longer spells without rain. <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Our seeds fail even if the soils are fertile because we can no longer count with the frequency and intensity of rainfall. Periods of prolonged drought are affecting planting and crop yields. Severe drought, especially in the first season of 2019, affected farmers who planted oranges and mangoes, because it did not allow seedlings to establish properly in the field and they eventually dried out."
                  action={action} /><Button onClick={handleClick}>MAP</Button>
                <Snackbar
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleCloseNote}
                  message="Since 2016, Lake Albert's water level has been rising steadily, and during the rainy season it floods a large number of fishing villages. The map shows the areas that have been flooded by water over the past five years. Lack of natural shore defences causes the lake to easily flood such flat areas."
                  action={action} /> That makes agriculture difficult too, and yet we are running to it since fishing has declined<br /><br /></Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '70vh',
            padding: '1em',
          }}>
            <CardContent sx={{ maxWidth: 800 }}>
              <Typography component='div' className="sentence" sx={{ mt: 2 }}>We thank Environmental Defenders for supporting us in the restoration of tree cover here in Dei. The crops we cultivate  here are mixed with trees. This is good because it will help to restore the vast tree cover that has now been cut down over the years leaving the ground more bare</Typography>
            </CardContent>
          </FullpageSection>

          <FullpageSection className='footer' style={{
            backgroundColor: 'rgba(252, 250, 247, 1)',
            height: '100vh',
            padding: '1em',
            borderTop: '1px solid rgba(114, 114, 114, 0.5)'
          }}>
            <CardContent className='cc'>
              <Typography component='div' className="footert" sx={{ mt: 2 }}>Many thanks to<div className='gagga'></div> which, through <div className='mama'></div><div className='packard'></div> allowed the women of Dei's sub-county to amplify their voices, thanks to the careful work of the Environmental Defenders team and the scientific coordination of Pamella Lakidi Achan<br /><br /><br />
              </Typography>
            </CardContent>
            <CardContent className='cc'>
              <Typography component='div' className="footert" sx={{ mt: 2 }}><div className='logofooter'></div>Environmental Defenders,<br />PO-BOX, 9520 Kampala, Uganda<div className='license'></div><br /><br /><br />
              </Typography>
            </CardContent>
          </FullpageSection>


        </FullPageSections>

      </Fullpage></>
  )
}


export default Summary;