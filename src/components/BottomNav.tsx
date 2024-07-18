import { useTheme } from "@mui/material/styles"
import { Typography, AppBar } from "@mui/material"

function BottomNav() {

    const theme = useTheme()

    return (
        <AppBar position="static" sx={{
            mt: 10,
            mb: -5,
            pt: 2,
            textAlign: "center",
            backgroundColor: `${theme.appbar.backgroundColor}`,
            borderTop: `1px solid ${theme.border.color}`,
        }}
        >
            <Typography variant="body1">
                Last Updated: July 17, 2024
            </Typography>
        </AppBar>
    )

}

export default BottomNav