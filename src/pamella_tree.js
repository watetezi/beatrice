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

import Maesopsis from "./img/Maesopsis.png";
import Markaamia from "./img/Markhamia.png";
import Albizia from "./img/Albizia.png";
import Mbeni from "./img/Mbeni.png";
import Pinus from "./img/Pinus.png";
import Mangifera from "./img/Mangifera.png";

const PamellaTree = () => {


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

    function createData(plant, ind, comm, med, descr, agro) {
        return { plant, ind, comm, med, descr, agro };
    }

    const ancestr = [
        createData('Maesopsis Eminii', 'YES', 'YES', 'YES', 'Used for reforestation purposes, leaves are used as fodder, shade', 'The wood is used for purposes such as light construction, boxes and crates, millwork, plywood or core stock. Fast maturation period comparable with introduced coniferous trees and produces comparatively more wood per unit area. Roots and barks are used in medicine.'),
        createData('Markaamia lutea', 'YES', 'YES', 'YES', 'Shade, soil erosion control, soil fertility improvement through nitrogen-fixing, soil fertility improvement through mulch/ leaves', 'The wood is moderately durable, being moderately resistant to termites.  It is held to be an excellent timber for interior carpentry and cabinetry. Roots are used in medicine'),
        createData('Albizia coriaria ', 'YES', 'YES', 'YES', 'Shade, soil fertility improvement through nitrogen-fixing, soil fertility improvement through mulch/ leaves,bee forage', 'The wood is used for construction, joinery, turnery, implements, carvings. It is also suitable for carpentry, musical instruments, boxes and crates. Leaves used to hasten banana ripening. Bark, leaves, and roots are used in medicine'),
        createData('MBENI - Eucalyptus grandis', 'NO', 'YES', 'YES', 'Shade, riverbank stabilization, windbreak', 'The wood is a source of timber which can be used for boat building. The firewood is used for domestic purposes and for curing tobacco. Ground branch tips and leaves are used in medicine'),
        createData('Pinus caribaea', 'NO', 'YES', 'YES', 'Shade, soil erosion control, windbreak', 'Vanillin flavouring is obtained as a by-product of other resins that are released from the pulpwood. The sapwood can be tapped for oleoresin. Provides timber. Leaf oil, resin and barks are used in medicine'),
        createData('Mangifera indica', 'NO', 'YES', 'YES', 'Windbreak, shade', 'Fruits are eaten raw, juiced or prepared in chutneys, jams, pickles. Seeds are used in the preparation of pudding. Young leaves can be cooked as a vegetable. The bark and the leaves are the source of a yellowish-brown dye. The flowers are used to repel mosquitoes. The slender branches are used as toothbrushes to treat toothache. The wood is used for indoor construction, furniture, carpentry,  boxes, crates and boat building. Leaves, seeds, barks, roots, flowers and fruit are used in medicine'),
    ];


    return (

        <><CardContent sx={{ maxWidth: 800 }}>
        </CardContent>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">LIST OF FURTHER INDIGENOUS OR COMMERCIALLY INTRODUCED TREES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper} sx={{ maxHeight: 350, overflow: 'auto' }}>
                        <Table sx={{ minWidth: 1000, fontSize: 15 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Tree name and species</TableCell>
                                    <TableCell align="center">Indigenous</TableCell>
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
                                        <TableCell align="center">{row.ind}</TableCell>
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
                                alt="Maesopsis Eminii"
                                height="180"
                                image={Maesopsis}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>Maesopsis Eminii</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Markaamia lutea"
                                height="180"
                                image={Markaamia}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom >Markaamia lutea</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Albizia coriaria "
                                height="180"
                                image={Albizia}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>Albizia coriaria </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Mbeni"
                                height="180"
                                image={Mbeni}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>MBENI</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Pinus caribaea"
                                height="180"
                                image={Pinus}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>Pinus caribaea</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Mangifera indica"
                                height="180"
                                image={Mangifera}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>Mangifera indica</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default PamellaTree;
