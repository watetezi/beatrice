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



const Fish = () => {


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Many of us fish Mukene, Onangnang, Angara and Ngassa.<br />I do it for subsistence of my household, while the extra I sell at the landing site<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message="TO FIX> TO FIX> TO FIX> The typical fisher dealers at Dei are those who hire a boat from a ‘Boss’ and then hire a fisherman to go out and harvest fish for him/her in Lake Albert. He/she receives the fish and then sells it to others. The ‘others’ includes those that buy wholesale fresh fish and transport it to destinations outside Dei; those who buy fresh fish and sell it to consumers at Dei landing site; Those that buy fish, smoke it and then go and sell it to other markets outside of Dei Landing site"
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


export default Fish;