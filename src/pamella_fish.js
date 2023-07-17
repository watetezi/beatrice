import './App.css';
import * as React from "react"

import Hydrocinus from "./img/Hyvit_u0.png";
import Alestes from "./img/Aljac_u0.png";
import Brycinus from "./img/Almac_u0.png";
import Rastrineobola from "./img/Raarg_u0.png";


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



const PamellaFish = () => {


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>I belong to a women's group who are fisherwomen too: we deal in the small fish (Mukene), Onangnang, Angara and Ngassa. This is what helps us to sustain our households through food and income we earn through fish sales <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="The landing site is mostly run around fish traders. They own or rent a boat from a 'chief', and hire a group of 3-4 fisherfolk to go fishing for him/her. He/she then sells the catch directly to consumers at the landing site, sells it wholesale to those who take it out of the village of Dei, or has it processed, sun-dried or smoked, and then transports it to the local sub-county markets. Those who have their own canoe or boat try to organise their own fishing trip for their own consumption by selling the surplus directly to consumers at the landing site, or join the other women in processing the fish to preserve it or sell it at markets."
                    action={action} />
            </Typography>
        </CardContent><Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Rastrineobola argentea"
                                height="100"
                                image={Rastrineobola}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>MUKENE (MUZIRI)<br /><i>Rastrineobola argentea</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Brycinus nurse"
                                height="100"
                                image={Brycinus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ONANGNANG (NANG NANG, RAGOGI)<br /><i>Brycinus nurse</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Alestes barenose"
                                height="100"
                                image={Alestes}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>ANGARA<br /><i>Alestes baremoze</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Hydrocinus forskali"
                                height="100"
                                image={Hydrocinus}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>NGASSA<br /><i>Hydrocinus forskali</i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default PamellaFish;