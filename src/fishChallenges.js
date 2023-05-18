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

