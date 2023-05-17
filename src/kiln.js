import './App.css';
import * as React from "react"

import Kilntrad from "./img/kiln-trad.png";
import Kilnsust from "./img/kiln-sust.png";


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

const Kiln = () => {


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>As women we are organised in groups<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message=" the Kwer Kabacayi Women Group and the Cwara Nguta Women Group"
                    action={action}
                />. When I am not fishing we are together at the landing site smoking, sun-drying and salting the fish or lastly, taking it to market<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message=""
                    action={action}
                />. We are striving to make fishing a more sustainable process and finally have our own new boat<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message=""
                    action={action}
                /></Typography>
        </CardContent><Box sx={{ width: '100%' }}>
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
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>KWER KABACAYI WOMEN GROUP' FISH SMOKING KILN</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="Kiln"
                                height="180"
                                image={Kilnsust}
                                sx={{ objectFit: "contain" }} />
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Kiln;