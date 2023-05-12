import logo from './logo.svg';
import './App.css';
import * as React from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Hydrocinus from "./img/Hyvit_u0.png";
import Alestes from "./img/Aljac_u0.png";
import Brycinus from "./img/Almac_u0.png";
import Rastrineobola from "./img/Raarg_u0.png";

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'

import Basemap from './basemap';



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
          height: '60vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>My name is Beatrice and I am an Alur<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
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
          backgroundColor: 'white',
          height: '40vh',
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
          backgroundColor: 'white',
          height: '100vh',
          padding: '1em',
        }}>
          <Typography component='div' className="notemap" sx={{ mt: 2 }}>Interact with the map</Typography>
          <Basemap />
        </FullpageSection>

        <FullpageSection style={{
          backgroundColor: 'white',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Many of us fish Mukene, Onangnang, Angara and Ngassa.<br />I do it for subsistence of my household, while the extra I sell at the landing site<Button onClick={handleClick}>ꔮ</Button>
              <Snackbar
                open={open}
                autoHideDuration={100000}
                onClose={handleClose}
                message="TO FIX> TO FIX> TO FIX> The typical fisher dealers at Dei are those who hire a boat from a ‘Boss’ and then hire a fisherman to go out and harvest fish for him/her in Lake Albert. He/she receives the fish and then sells it to others. The ‘others’ includes those that buy wholesale fresh fish and transport it to destinations outside Dei; those who buy fresh fish and sell it to consumers at Dei landing site; Those that buy fish, smoke it and then go and sell it to other markets outside of Dei Landing site"
                action={action}
              />
            </Typography>
          </CardContent>

          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>
                  <CardMedia
                    component="img"
                    alt="Rastrineobola argentea"
                    height="150"
                    image={Rastrineobola}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>
                      MUKENE (MUZIRI)<br /><i>Rastrineobola argentea</i>
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
                    component="img"
                    alt="Brycinus nurse"
                    height="150"
                    image={Brycinus}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>
                      ONANGNANG (NANG NANG, RAGOGI)<br /><i>Brycinus nurse</i>
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
                    component="img"
                    alt="Alestes barenose"
                    height="150"
                    image={Alestes}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>
                      ANGARA<br /><i>Alestes barenose</i>
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <CardMedia
                    component="img"
                    alt="Hydrocinus forskali"
                    height="150"
                    image={Hydrocinus}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography component='div' className="fish" color="text.secondary" gutterBottom>
                      NGASSA<br /><i>Hydrocinus forskali</i>
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </FullpageSection>


        <FullpageSection style={{
          backgroundColor: 'white',
          height: '100vh',
          padding: '1em',
        }}>
          <CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>I fish for livelihood and cultivate garden to complement my subsistence</Typography>
          </CardContent>
        </FullpageSection>

      </FullPageSections>

    </Fullpage >
  )
}


export default App;