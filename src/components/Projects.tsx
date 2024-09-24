import { useTheme } from "@mui/material/styles"
import { Box, Typography, Card, CardActions, CardContent, CardMedia, Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

function Projects() {

    const theme = useTheme()

    return (
        <Box
            sx={{
                m: "30px",
                p: 2,
                width: "90vw",
                color: `${theme.text.color}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px"
            }}
        >
            <Typography gutterBottom variant="h3">
                Featured Projects
            </Typography>
            <Grid container>
                <Grid sx={{ mr: "15px" }}>
                    <Card sx={{ maxWidth: "600px", border: `2px solid ${theme.border.color}`, borderRadius: "5px" }}>
                        <CardMedia
                            sx={{ height: "270px" }}
                            image={require("../images/project-irminsul.png")}
                            title="Project Irminsul"
                        />
                        <CardContent sx={{ backgroundColor: `${theme.card.backgroundColor}`, color: `${theme.text.color}` }}>
                            <Typography gutterBottom variant="h5" fontWeight="500">
                                Irminsul.GG
                            </Typography>
                            <Typography variant="body2">
                                <i>(2021 - present)</i>
                                <br />
                                A comprehensive database website covering popular gacha games, including <i>Genshin Impact</i>, <i>Honkai: Star Rail</i>, and <i>Wuthering Waves</i>.
                                <br />
                                This site is my long-term passion project, and it is constantly updated as new versions of each game are released. I also implement any new skills I have learned to the site.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ backgroundColor: `${theme.appbar.backgroundColor}`, color: `${theme.text.color}` }}>
                            <Button size="medium" href={"https://irminsul.gg/"} target="_blank">Visit</Button>
                            <Button size="medium" href={"https://github.com/bcheung98/irminsul-gg"} target="_blank">Repo</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid>
                    <Card sx={{ maxWidth: "600px", border: `2px solid ${theme.border.color}`, borderRadius: "5px" }}>
                        <CardMedia
                            sx={{ height: "270px" }}
                            image={require("../images/hurricane-tracker.png")}
                            title="Hurricane Tracker"
                        />
                        <CardContent sx={{ backgroundColor: `${theme.card.backgroundColor}`, color: `${theme.text.color}` }}>
                            <Typography gutterBottom variant="h5" fontWeight="500">
                                Hurricane Tracker
                            </Typography>
                            <Typography variant="body2">
                                <i>(2019 - 2020)</i>
                                <br />
                                An interactive tropical storm archive and viewer.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ backgroundColor: `${theme.appbar.backgroundColor}`, color: `${theme.text.color}` }}>
                            <Button size="medium" href={"https://bcheung98.github.io/hurricane-tracker/"} target="_blank">Visit</Button>
                            <Button size="medium" href={"https://github.com/bcheung98/hurricane-tracker"} target="_blank">Repo</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )

}

export default Projects