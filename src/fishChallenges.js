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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>You can spot me coming back from a fishing trip onboard any of the 80 between canoes and boats at Dei's landing sites. In 2020 there were 690<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message="Who in recent centuries we have also called M'vouta-N'zighé (Wutan-Zigé) among Alur people"
                    action={action} />. <br />Fishing becomes increasingly difficult :<br /><br /><Button onClick={handleClick}>NOTE ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message="Who in recent centuries we have also called M'vouta-N'zighé (Wutan-Zigé) among Alur people"
                    action={action} /></Typography>
        </CardContent>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>PIRACY<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3} >
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>DECLINE OF AQUATIC FAUNA AND DIVERITY DUE TO THE USE OF PROHIBITED FISHING REARS OR ILLEGAL FISHING METHODS<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>WATERBORNE DISEASES AND OVER-REPRODUCTION OF THE WATER HYACINTH<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>A STRICT NEW FISHERIES AND AQUACULTURE ACT PREVENTING SUBSISTENCE FISHERFOLK FROM COMPLYING WITH REQUIREMENTS<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>HIGH REPAIR COSTS FOR BOATS AND CANOES DUE TO CRACKS RESULTING FROM STRONG WINDS<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>INCREASED EQUIPMENT PRICES AND THEFT AMONGST FISHERFOLK THEMSELVES<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>MILITARISATION AND MISUSE OF POWER BY THE FISHERIES PROTECTION UNIT AND FISH PATROL UNITS<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}><CardContent className='chall'>
                            <Typography component='div' className="fishChallenges" color="text.secondary" gutterBottom>DISREGARD FOR CUSTOMARY NORM THAT FISHING TRIPS ARE NOT ALLOWED WHEN THE MOON IS OUT<br /></Typography>
                        </CardContent></Item>
                    </Grid>
                </Grid>
            </Box> </>
    )
}


export default FishChallenges;

