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
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Net from "./img/net.png";


const Boat = () => {


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

    function createData(item, gou, amount) {
        return { item, gou, amount };
    }

    const rowsBoat = [
        createData('Timber', '30 pieces', 210000),
        createData('Frames', '25 pieces', 300000),
        createData('Colors for painting the boat', '4 tins ', 220000),
        createData('Blankets to close gaps between timbers', '6 pieces', 60000),
        createData('Pay Labour for the carpenter', '1 person', 500000),
    ];

    const rowsEquip = [
        createData('Fishing net for Mukene/Onangnang', '7 long-lines', 1295000),
        createData('Corks for the long-lines', '600 corks', 600000),
        createData('Ropes', '8 pieces', 216000),
        createData('Stones', '16 pieces', 16000),
        createData('Nylon sewing rope', '4 pieces', 28000),
        createData('Pay Labour for sewing', '1 person', 8000),
        createData('Pressure Lamps', '4 pieces', 520000),
        createData('Kitambi', '4*2 lamps', 8000),
        createData('Nylon sewing rope', '4 pieces', 28000),
        createData('Fuel for the engine', '20 litres', 120000),
        createData('Rent for engine', '1 piece', '400000 per month', 400000),
    ];



    return (

        <><CardContent sx={{ maxWidth: 800 }}>
            <Typography component='div' className="sentence" sx={{ mt: 2 }}>Our traditional boats, canoes and equipment are mostly outlawed<Button onClick={handleClick} onClose={handleCloseNote}>ꔮ</Button>
                <Snackbar
                    open={open}
                    autoHideDuration={100000}
                    onClose={handleCloseNote}
                    message="The Fisheries and Aquaculture Bill, 2021 has completely transformed the lives of us fisherfolk. A lot of regulations were imposed out of the blue without giving any time to prepare ourselves. Our traditional canoes or boats are less than 8 metres long, the minimum length allowed. Legal fishing nets are difficult to get and too expensive (encouraging recourse to illegal rearing fishing or illegal fishing methods). We report GOU is currently enforcing compliance through seizure of boats and/or nets and that the seized items are routinely burnt by the law enforcement personnel. However, a review of the provisions of the law, sections 101 and 102 shows no provision in the Bill that gives the enforcement officers power to destroy and/or burn boats and nets once a suspect is arrested. The police seize or destroy the equipment of suspects abusing their power to the point of extrajudicial detention."
                    action={action}
                />. A single fishing trip can cost up to UGX 7,700,000 (USD 200) per individual fisherfolk to comply with new government regulations< br />< br /></Typography>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">OVERVIEW OF COSTS FOR BOAT BUILDING</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <TableContainer component={Paper} sx={{ maxHeight: 150, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 650, fontSize: 15 }} aria-label="simple table">
                            <TableBody>
                                {rowsBoat.map((row) => (
                                    <TableRow
                                        key={rowsBoat.item}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.item}
                                        </TableCell>
                                        <TableCell align="right">{row.gou}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>


                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">OVERVIEW OF COSTS PER FISHER FOR A SINGLE FISHING TRIP WITH EQUIPMENT COMPLIANT WITH GOVERNMENT REGULATION</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <TableContainer component={Paper} sx={{ maxHeight: 150, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 650, fontSize: 15 }} aria-label="simple table">
                            <TableBody>
                                {rowsEquip.map((row) => (
                                    <TableRow
                                        key={rowsEquip.item}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.item}
                                        </TableCell>
                                        <TableCell align="right">{row.gou}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </AccordionDetails>
            </Accordion>< br />

        </CardContent>


            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Item sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography component='div' className="fish" color="text.secondary" gutterBottom sx={{ fontSize: "14px !important" }}>TRADITIONAL BOAT< br />AT DEI LANDING SITE</Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                alt="Net"
                                height="160"
                                image={Net}
                                sx={{ objectFit: "contain" }} />
                        </Item>
                    </Grid>
                </Grid>
            </Box>< br />< br /></>
    )
}


export default Boat;
