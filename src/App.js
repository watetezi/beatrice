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
    <><div className='logo'></div>
    
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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}><i>Morembe</i>, my name is Beatrice and I am an Alur fisherwoman from Lake Albert<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleClose}
                message="We call the lake by the name of M'vouta-N'zighé (Wutan-Zigé) as spoken in the Alur language and the dialect of the lower lands, the Jonam. The north-western shore of the lake is our ancestral land, since we anciently migrated with other Luo groups from the confluence of the Nile River and Bahr-el-Ghazel (today Sudan), our homeland, to settle in this area. Morembe, is how I bring greetings."
                action={action} /></Typography>
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
          <Fish />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <FishChallenges />
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <Boat />
        </FullpageSection>

        <FullpageSection className='deforestation' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <Deforestation />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <Kiln />
        </FullpageSection>

        <FullpageSection className='agro' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>However, at present, we cannot rely entirely on fishing. So, we cultivate garden to complement our subsistence<Button onClick={handleClick}>MAP</Button>
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
          height: '100vh',
          padding: '1em',
        }}>
          <Crop />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>We women are the custodians of the knowledge about ecological practices and we strive to perpetuate it. All are centred around agroforestry<br /><br /></Typography>
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
          <Nonancestral />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <Tree />
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
                autoHideDuration={10000}
                onClose={handleCloseNote}
                message="First it was the forests that became private during the 20th century. Then the same forests were cleared for extensive and then intensive agricultural use. While initially agriculture served to feed the growing population of Dei's sub-county and the products sold to the local market, over time the profitability of some cash crops was evaluated. This has brought an end to agroforestry and drastically reduced the acreage of land available for subsistence farming, which is now critically important for the livelihoods (on average, people need one acre of land per household) of many households given the challenges being posed in the fisheries sector."
                action={action} /> We do not own many land, and as women our land rights are even less respected through an oppressive scheme that reproduces itself in daily life <Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleCloseNote}
                message="Land – its access, control and ownership – lies at the heart of power relationships within Uganda. The struggle for land is deeply intertwined with the struggle for women’s rights. Women’s access to and control over resources and economic decision making is fundamental to the achievement of their rights. Despite some progress, inequality between women and men in ownership and control of land remains stark. Cultural prohibitions against women’s ownership of land are often more powerful than statutory laws that allow women to own land. These cultural norms may determine which rights to land a woman can exercise freely. Effective statutory laws protecting land, inheritance and property rights of women including the widowed, divorced, separated or those in co-habitation are critically missing. Moreover, violence is breeding in Dei, particularly gender-based violence. There were 10 murder cases recorded between 2021 and 2022, including gender-based violence involving young people, mainly due to relationship break-ups or theft offences. Daily life hinges on violations, such as those at the landing site, where fish happened to be sold in return for transactional sex."
                action={action} /><br /><br /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection className='water' style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>More than that, on the land we cultivate, we suffer from the effects of climate change<Button onClick={handleClick}>ꔮ</Button>
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
                action={action} /><br /><br /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>As community and women's groups, we are working to restore the forest to its ecological functionality, <Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleCloseNote}
                message="We know that we do not have enough forest resources to heat ourselves, build our homes and cook. In our parish alone live 628 households; never have so many people inhabited this land, never have there been so few forest resources available. Also, almost exclusively financial reasons, leads to cutting trees for burning charcoal and firewood. Specifically, two-thirds of people report that in the absence of other sources of income, they sell forest products rather than for household use."
                action={action} /> and reintroduce agroforestry practices<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleCloseNote}
                message="What we do as women in agroforestry: transplanting the seedlings from the nursery beds; planting the seedlings, watering the seedlings, prepare tea for all the people involved. Women are also elected to sit on and therefore make decisions in the market committee of forestry groups. Two nursery operators also live and work in the sub-county and help with operations."
                action={action} /><br /><br /></Typography>
          </CardContent>
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'rgba(252, 250, 247, 1)',
          height: '45vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Here is a solution; we pretend not to be forced into migration because we can't continue to keep our livelihoods. But we need support, such as what Environmental Defenders is giving us<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleCloseNote}
                message="Seeds collection, banking, and storage, nursery and distribution of seedlings, is an initiative by Environmental Defenders, as part of their actions towards environmental conservation. It is not being implemented by any other organization in the sub-county."
                action={action} /><br /><br /></Typography>
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


export default App;