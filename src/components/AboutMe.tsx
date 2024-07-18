import { useTheme } from "@mui/material/styles"
import { Box, IconButton, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

function AboutMe() {

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
                About Me
            </Typography>
            <Grid container>
                <Grid xs={5} sx={{ mr: "25px", mb: "10px" }}>
                    <Typography variant="body1">
                        Hello, my name is Brian Cheung. I'm a software engineer based in the San Francisco Bay Area with a passion for making practical web applications with clean user interfaces and designs.
                        <br /><br />
                        I am experienced with Python, JavaScript, and Ruby on Rails based programming, and am always eager to learn new technologies using strong pattern recognition skills.
                        <br /><br />
                        <b>I am currently open to looking for jobs in the software engineering industry (either in-person or remote), so please do not hesistate to contact me if you have any opportunites!</b>
                        <br /><br />
                        Outside of programming, my other hobbies and interests include computer games, anime, photography, and travelling!
                    </Typography>
                    <Box sx={{ my: "20px" }}>
                        <Typography gutterBottom variant="h4">
                            Social Links:
                        </Typography>
                        <IconButton disableRipple size="large" onClick={() => window.location.href = "mailto:briantcheung@gmail.com"} sx={{ color: "white" }}><EmailIcon /></IconButton>
                        <IconButton disableRipple size="large" href={"https://github.com/bcheung98"} target="_blank" sx={{ color: "white" }}><GitHubIcon /></IconButton>
                        <IconButton disableRipple size="large" href={"https://www.linkedin.com/in/bcheung98/"} target="_blank" sx={{ color: "white" }}><LinkedInIcon /></IconButton>
                    </Box>
                </Grid>
                <Grid xs="auto">
                    <img src={require("../images/brian1.jpg")} alt="Brian Cheung" style={{ height: "512px", borderRadius: "5px" }} />
                </Grid>
            </Grid>
        </Box>
    )

}

export default AboutMe