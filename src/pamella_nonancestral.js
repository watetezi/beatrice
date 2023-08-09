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

import Yao from "./img/Yao.png";
import Kalarufu from "./img/Kalarufu.png";
import Acoga from "./img/Acoga.png";
import Osiga from "./img/osiga.png";
import Olemo from "./img/olemo.png";
import Tooo from "./img/tooo.png";


const PamellaNonancestral = () => {


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
        createData('YAAU or YAO - Butyrospermum paradoxum', 'YES', 'YES', 'Significant role in soil and water conservation and environmental protection. Seed husks are an excellent mulch and fertiliser. Furthermore, they can remove heavy metal ions in aqueous solutions. Cooperative plants with cereal crops', 'The kernel of the seed contains a vegetable fat known as shea butter. Refined fat is marketed as margarine and baking fat. The reddish latex which exudes from deep cuts in the bark is used as a chewing gum. The flowers are edible and sometimes made into fritters. High unsaponifiable matter content imparts excellent moisturizing characteristics. Suitable for making candles. As waterproofing material is used as daubing for earthen walls, doors and windows. Waste water from shea butter production has pesticidal properties. Only unproductive and unhealthy trees are cut for timber. Leaves, ground  roots, barks are used in medicine'),
        createData('KALARUFU - Grevillea robusta', 'YES', 'NO', 'Windbreak, provides fodder for the animals, shade, soil erosion control, soil fertility improvement through mulch/ leaves', 'Wood is used for paneling, joinery, cabinet making. Provide poles. Provide firewood and charcoal'),
        createData('ACOGA - Carissa edulis', 'NO', 'YES', 'Suitable for planting as a protective hedge', 'Fruits are edible and can be fermented to make a refreshing pink wine or left longer to make vinegar. When planted as a hedge along a fence will be so thick that no stock or wildlife will be able to penetrate it. Roots are used in medicine'),
        createData('OSIGA - Solanum nigrum', 'NO', 'YES', 'Effective in removing Polychlorinated biphenyls (PCBs) from the soil and detoxifying', 'Fruits are eaten cooked or  used in preserves, jams and pies. Young leaves and new shoots are eated raw or cooked as a potherb or added to soups. Leaves, stems and roots are used in medicine'),
        createData('OLEMO - Ximenia americana', 'YES', 'YES', 'Suitable for planting as a protective hedge', 'The fruits, as well as being pleasant to eat raw, can be used to make juice, jams and jellies. Kernel oil is used as a vegetable butter and as a ghee substitute. Young leaves are edible after thorough cooking. Firewood and charcoal are the main uses of the wood. Heartwood contains an essential oil used for fumigation. The flowers have an essential oil. Sambunigrine has been identified as the main cyanogenetic principle in the plant. Leaves, barks, roots, fruits and twigs are used in medicine'),
        createData('TOOO - Balanites aegyptiaca', 'YES', 'YES', 'Planted in shelterbelts, shade', 'The fleshy pulp of both unripe and ripe fruit is edible and eaten dried or fresh. Flowers are sucked to obtain nectar. A strong fibre is obtained from the bark. The wood is hard, durable, worked easily and made into yokes, wooden spoons, pestles, mortars, handles, stools and combs.A greenish-yellow to orange-red resin is produced from the stems. It is sucked and chewed when fresh. The kernels produce edible oil used for cooking. Roots are used in medicine'),
        createData('Cassia sieberiana', 'YES', 'YES', 'Planted in shelterbelts', 'Heartwood is finely textured, heavy, very hard, resistant to termites and difficult to work. The pods are traded as vermifuge. Leaves, roots and pods are widely used in medicine'),
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
                    <Typography sx={{ fontSize: "11px !important", WebkitTextFillColor: "rgb(105, 105, 105) !important" }} className="fishChallenges">LIST OF TREES WITH A DISCRETE ANCESTRAL KNOWLEDGE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper} sx={{ maxHeight: 350, overflow: 'auto' }}>
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
                                alt="Yao"
                                height="180"
                                image={Yao}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>YAAU or YAO</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Kalarufu"
                                height="180"
                                image={Kalarufu}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom >KALARUFU</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Acoga"
                                height="180"
                                image={Acoga}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>ACOGA</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Osiga"
                                height="180"
                                image={Osiga}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>OSIGA</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Olemo"
                                height="180"
                                image={Olemo}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>OLEMO</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Tooo"
                                height="180"
                                image={Tooo}
                                sx={{ objectFit: "contain" }} />
                            <Typography sx={{ padding: 1 }} component='div' className="fish" color="text.secondary" gutterBottom>TOOO</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default PamellaNonancestral;
