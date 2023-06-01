import './App.css';
import * as React from "react"

import Cassava from "./img/cassava.png";
import Maize from "./img/maize.png";
import Sweet from "./img/sweet.png";
import Soybean from "./img/soybean.png";
import Groundnut from "./img/groundnut.png";
import Sesame from "./img/sesame.png";
import Bean from "./img/bean.png";
import Pumpkins from "./img/pumpkin.png";

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



const Crop = () => {


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>It is mostly us women, those engaged in agricultural work. <Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="Seasonally we plant twice, between March-April and August-September, i.e. at the beginning of the rainy seasons (the first rainy season stretches from March to June, the second from mid-August to the end of November). Harvest is in June-July and November-December. Only two-fifths of us manage to use their stored seeds (in particular, cassava, beans, grandnuts and soybeans seeds are preserved). We need seeds. The government supports us sporadically at the district level: during the period 2019-2022, on average, a farmer received 6-6.5 kg of maize and planted it on just over half (0.63-0.65) of an acre; each cassava cuttings beneficiary received 7 bags of cuttings and planted it on average on just about an acre; each bean farmer received 13 kgs of seeds and planted it on average on less than half (0.44) of an acre. The ratio of females to males in the seed distribution was about 1:1. We chronically suffer with seed deficit despite public support, so we need the support of programmes of local and regional organisations. We complain about timing errors by the National Agriculture Advisory Services NAADS - OCW Programme with the supply of seeds, which are brought here when the planting season is over and we enter the dry season. We are organising ourselves into women's groups to cope; in Dei you can meet the Chan Ber Ku Fur Women' Group."
                    action={action} /> Among us are the seed custodians.<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="We store the maize cobs over the kitchen fire.  The smoke from cooking preserves the seeds, which we store in our house for the next season's sowing. So do the other seeds. We do not have a proper seed bank, the traditional ones have been destroyed due to lack of maintenance or disastrous climatic events, such as floods. The introduction of varieties we are not familiar with and from outside makes our role difficult. Some cassava varieties introduced from outside cannot be preserved; we prefer local varieties. We have had seeds of cotton and tomato varieties that do not grow here. We ask for more attention to the control of varieties when introduced from outside."
                    action={action} /></Typography>
        </CardContent><Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Cassava"
                                height="200"
                                image={Cassava}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>CASSAVA<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Soybean"
                                height="200"
                                image={Soybean}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>SOYBEAN<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Maize"
                                height="200"
                                image={Maize}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>MAIZE<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Sweet potato"
                                height="200"
                                image={Sweet}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>SWEET POTATO<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Groundnuts"
                                height="200"
                                image={Groundnut}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>GROUNDNUTS<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Sesame"
                                height="200"
                                image={Sesame}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>SIM SIM (SESAME)<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Beans"
                                height="200"
                                image={Bean}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>BEANS<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Pumpkins"
                                height="200"
                                image={Pumpkins}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>PUMPKINS<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Crop;