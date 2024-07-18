import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

function Experience() {

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
            <Typography gutterBottom variant="h3" sx={{ mb: "15px" }}>
                Experience
            </Typography>
            <Box sx={{ m: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: "15px" }}>
                    <Typography variant="h5">
                        <b>Independent Frontend Developer</b> (Aug 2022 - present)
                    </Typography>
                </Box>
                <Typography gutterBottom variant="body1">
                    Spending time creating frontend development passion projects independently, with a focus on React JS.
                    <br />
                    Since June 2024, I have also been learning TypeScript.
                </Typography>
            </Box>
            <hr style={{ border: `1px solid ${theme.border.color}`, margin: "10px" }} />
            <Box sx={{ m: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: "15px" }}>
                    <Typography variant="h5">
                        <b>Iterable</b> (Jun 2022 - Aug 2022)
                    </Typography>
                </Box>
                <Typography gutterBottom variant="h6">
                    Engineering Intern
                </Typography>
                <Typography gutterBottom variant="body1">
                    Technologies used: Python, Locust, Git, Docker, Kubernetes
                </Typography>
                <Typography gutterBottom variant="body1">
                    <li>Worked on the Performance Engineering team, which ensures that the current platform can scale, new features do not degrade performance, and coming up with ways to test functionality at scale.</li>
                    <li>Organized and documented Python code for ease of use across the team.</li>
                    <li>Created a test suite using Python and Locust that exercises the platform's systems using realistic traffic with generated fake data.</li>
                    <li>Tests will generate performance data, which will be shared with other teams to highlight performance issues before customers do.</li>
                </Typography>
            </Box>
        </Box>
    )

}

export default Experience