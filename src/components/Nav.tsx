import { useTheme } from "@mui/material/styles"
import { Typography, AppBar, Container } from "@mui/material"

function Nav() {

    const theme = useTheme()

    return (
        <AppBar position="static"
            sx={{
                backgroundColor: `${theme.appbar.backgroundColor}`,
                borderBottom: `1px solid ${theme.border.color}`,
                py: 2
            }}
        >
            <Container maxWidth="xl" sx={{ margin: 0 }}>
                <Typography variant="h4">
                    <b>Brian Cheung</b>
                </Typography>
            </Container>
        </AppBar>
    )

}

export default Nav