import './App.css';
import * as React from "react"

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const FishChallenges = () => {


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

        <><CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>You can spot me coming back from a fishing trip onboard any of the 80 between canoes and boats at Dei's landing sites. In 2020 there were 690 boats.<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="Recent restrictions due to COVID-19, coupled with price fluctuations at the market, the unaffordability of the equipment required by the regulations introduced in 2021 and police persecution have reduced us to starvation due to the inability to put boats in the water at Dei landing sites. A little further north, at Kavango landing site, you won't find a single boat; just a couple of people hooping Tilapia with nets."
                    action={action} /><br />Fishing becomes increasingly difficult :<br /><br /><Button onClick={handleClick}>NOTE ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="We are suffering the action of water pirates, perhaps from the Congolese side, who confiscate boats and abduct fisherfolk for ransom. And bilateral meetings fail to come up with solutions while leaders are not consulted. The Fish Patrol Units and UPDF, instead of countering these criminal dynamics, are militarising the Ugandan fishing sector and criminalising fisherfolk, due to the regulations introduced by the Fisheries and Aquaculture Act of 2022, to which fisherfolk are unable to comply in the short term. The biggest problem is the replacement of the majority of the equipment, starting from the minimum length of the boats (8 meters), to the fishing net size and their material, not to mention the increased fuel costs for those who navigate by motor, the increased cost of boat maintenance (strong winds on the lake crack them easily) and equipment theft. The risk of having one's boat set on fire on the suspicion of wrongdoing is extremely high. On August 19, 2021, many of us lost all our equipment, burned by the military in a large public demonstration. And above all, the lake has changed. More and more waterborne diseases are emerging, while generally the aquatic fauna is declining in the area in front of the landing site. Chemical contaminants, never before found, are polluting the water; they are the noxious substances and acids that some fishermen use to fish. We are also worried about possible oil spills eventually caused by oil exploitation projects on the shore opposite Dei, Buliisa district."
                    action={action} /></Typography>
        </CardContent>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Water piracy<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3} >
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Decline of aquatic fauna and diverity due to the use of prohibited fishing rears or illegal fishing methods<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Waterborne diseases and over-reproduction of the water hyacinth<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>A strict new fisheries and aquaculture act preventing subsistence fisherfolk from complying with requirements<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>High repair costs for boats and canoes due to cracks resulting from strong winds<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Increased equipment prices and theft amongst fisherfolk themselves<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Militarisation and misuse of power by the fisheries protection unit and fish patrol units<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>Disregard for customary norm that fishing trips are not allowed when the moon is out<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                </Grid>
            </Box> </>
    )
}


export default FishChallenges;

