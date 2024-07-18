import { useTheme } from "@mui/material/styles"
import { Box, Typography, Chip } from "@mui/material"

function Skills() {

    const theme = useTheme()

    const skills = ["HTML", "CSS", "Git", "JavaScript", "React", "Ruby", "Ruby on Rails", "ActiveRecord", "Python", "NumPy", "Pandas", "Locust", "Docker", "Kubernetes", "Material UI"]
    const skills_in_progress = ["TypeScript"]

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
            <Typography gutterBottom variant="h5" fontWeight="bold">
                Technical Skills
            </Typography>
            {skills.map((skill: string, index: number) => <Chip key={index} label={<Typography variant="body2" fontWeight="500">{skill}</Typography>} color="primary" sx={{ mr: "10px" }} />)}
            {skills_in_progress.map((skill: string, index: number) => <Chip key={index} label={<Typography variant="body2" fontWeight="500">{`${skill} (currently learning)`}</Typography>} color="success" sx={{ mr: "10px" }} />)}
        </Box>
    )

}

export default Skills