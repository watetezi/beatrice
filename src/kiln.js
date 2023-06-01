import './App.css';
import * as React from "react"

import Kilnsust from "./img/kiln-sust.png";
import Drying from "./img/drying.png";


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
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>To overcome challenges, as women we are organised in groups.<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="Two of the organised women's groups at Dei's landing sites are the Kwer Kabacayi Women Group and the Cware Nguta Women Group. I am one of the 28 members of the Kwer Kabacayi group; before the fishing halt coincided with the preventive measures to the COVID-19 pandemic and the enforcement of government regulation in the fishing industry, we were 50."
                    action={action}
                /> When I am not fishing we are together at the landing site smoking, sun-drying and salting the fish or lastly, taking it to market, striving to make fishing a more sustainable practice<Button onClick={handleClick}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={10000}
                    onClose={handleCloseNote}
                    message="As a women's group, we are adopting practices and acquiring equipment to make fishing more sustainable. Our group installed a fishing smoke kiln (thanks to the support of the NARO project); we need 5,000 bricks, 27 bags of cement, 10 reinforcement bars, 8 stirrups, 4 kg of binding wires; 48 pieces of iron sheets; 65 pieces of timber, 6 trips of sand and 2 doors to complete the structure. Actually, this machine is optimal for bigger fish than the Mukene. Larger fish require a bigger boat and new fishing nets. It would take UGX 30,000,000 (USD 8,000) to achieve this.The Cwara Nguta Women's group instead built a solar fish drying machine (with the support of NUTRIFISH)."
                    action={action}
                /></Typography>
        </CardContent><Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>CWARA NGUTA WOMEN GROUP' SOLAR FISH DRYING MACHINE</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="Drying"
                                height="180"
                                image={Drying}
                                sx={{ objectFit: "contain" }} />
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
    )
}


export default Kiln;
