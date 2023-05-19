import './App.css';
import * as React from "react"

import Kilntrad from "./img/kiln-trad.png";


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Deforestation = () => {


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>We know fishing practices must take place through careful management of forest resources; wood collection for fish smoking has cleared several acres of forest across fishing villages<Button onClick={handleClick}>MAP</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message="The map proves the gross forest cover loss in the period 2000-2021 (source: Hansen/UMD/Google/USGS/NASA). Reasons include a combination of anthropogenic disturbances and natural or climatic cycles, but in the fishing villages, within 1 km distance from shoreline, it remains among the leading causes of deforestation. In the village of Dei, almost one in two people will state fish smoking is the reason for cutting down a tree. Traditional earthen kilns have enabled the Alur to preserve their catch for generations, being hugely important in ensuring our food security; the new kiln, when completed, will allow us to continue this practice without impacting forestry"
                    action={action}
                /></Typography>
        </CardContent>
            <Box className="tradkiln" sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                        <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>TRADITIONAL FISH SMOKING KILN</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="Traditional fish smoking kiln"
                                height="180"
                                image={Kilntrad}
                                sx={{ objectFit: "contain" }} />
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Deforestation;
