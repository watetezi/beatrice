import './App.css';
import * as React from "react"

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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Neem from "./img/neem.png";
import Cwaa from "./img/cwaa.png";
import Ogal from "./img/ogal.png";


const Knowledge = () => {


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

    function createData(plant, comm, med, descr, agro) {
        return { plant, comm, med, descr, agro };
    }

    const ancestr = [
        createData('NEEM - Azadirachta indica', 'NO', 'YES', 'Windbreak, provides fodder (leaves, oil-seed cake) for the animals, provides forage to the bees, promotes soil conservation', 'Fruits are eaten fresh or cooked, or prepared as a dessert or drink, young leaves and flowers can be cooked and eaten as a pre-meal, sap obtained from the branches and roots is fermented and drunk. A non-drying oil (margosa oil) extracted from the seed is used in hair dressings. The oil can also be used as a fuel in lamps. Leaf teas, an oil extracted from the seed, the twigs, bark, neem oil, neem leaf paste is used in medicine. The wood is a source of timber. The main stem is used to make poles for construction or fencing because the wood is termite resistant'),
        createData('CWAA - Tamarindus indica', 'NO', 'YES', 'Windbreak, provides fodder for the animals, can be used as a mulch, nitrogen fixation, shade', 'Green and tender seed pods are used as a seasoning and also to make juices and paste. Immature pods can be eaten fresh mixed with spices, or added whole to soups, stews and sauces. Mature pods contain a sticky paste which can be eaten raw, used to make drinks, jellies, syrups etc. The pulp mixed with water makes a pleasant drink. Roasted seeds can be used as a coffee substitute. Young leaves can be added to salads. Seedlings can be used as a vegetable. Flowers can be eaten raw in salads or cooked. Bark, leaves, flowers, flower buds, fruit, and seeds are used in medicine. The wood is used for general carpentry, sugar mills, wheels, hubs, wooden utensils, agricultural tools, mortars, boat planks. Provides good firewood. The leaves yield a red dye which is used to give a yellow tint to clothe previously dyed with indigo'),
        createData('OGAL - Piliostigma thonningii', 'NO', 'YES', 'Suitable for intercropping with crops. It provides good shade and serves as shelterbelt in homesteads when in full foliage. It is used in live fences around fields and as a live support for vines of weaker plants. Provides forage to the bees', 'The fruit is eaten as a snack or as an emergency food, especially by children and herdsmen. In times of scarcity the fruits are ground and boiled into porridge or made into drinks. Fibres extracted from the bark are widely used for making string, rope and cloth. Root fibres are made into rope as well. The leaves are used for wrapping food, and twigs and roots serve as toothbrushes. Roots, barks, leafs are used in medicine. We chew the root-bark to redden lips. The unripe fruits are used as a soap substitute, and the ash of ripe fruits is also used in soap making'),
    ];


    return (

        <><Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">LIST OF TREES WITH SOUND ANCESTRAL KNOWLEDGE</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <TableContainer component={Paper} sx={{ maxHeight: 250, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 1000, fontSize: 15 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tree name and species</TableCell>
                                    <TableCell align="center">Commercial use</TableCell>
                                    <TableCell align="center">Medicinal use</TableCell>
                                    <TableCell align="center">Agroforestry use</TableCell>
                                    <TableCell align="center">Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {ancestr.map((row) => (
                                    <TableRow
                                        key={ancestr.plant}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.plant}
                                        </TableCell>
                                        <TableCell align="center">{row.comm}</TableCell>
                                        <TableCell align="center">{row.med}</TableCell>
                                        <TableCell align="center">{row.descr}</TableCell>
                                        <TableCell align="center">{row.agro}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion >

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Neem"
                                height="200"
                                image={Neem}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>NEEM<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Cwaa"
                                height="200"
                                image={Cwaa}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>CWAA<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Ogal"
                                height="200"
                                image={Ogal}
                                sx={{ objectFit: "contain" }} />
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom>OGAL<br /><i></i></Typography>
                            </CardContent>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default Knowledge;
