import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
    interface Theme {
        appbar: {
            backgroundColor: string,
        },
        border: {
            color: string,
        },
        paper: {
            backgroundColor: string,
        },
        card: {
            backgroundColor: string,
        },
        toolbar: {
            backgroundColor: string,
        },
        text: {
            color: string,
            highlight: string,
        },
        button: {
            selected: string,
        },
        chip: {
            color: string
        }
    }
    interface ThemeOptions {
        appbar?: {
            backgroundColor?: string,
        },
        border?: {
            color?: string,
        },
        paper?: {
            backgroundColor?: string,
        },
        card?: {
            backgroundColor?: string,
        },
        toolbar?: {
            backgroundColor?: string,
        },
        text?: {
            color?: string,
            highlight?: string,
        },
        button?: {
            selected?: string,
        },
        chip?: {
            color?: string,
        }
    }
}

export const defaultTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto",
                    userSelect: "none"
                }
            }
        }
    },
    appbar: {
        backgroundColor: "rgb(0, 16, 32)",
    },
    border: {
        color: "rgb(30, 73, 118)",
    },
    card: {
        backgroundColor: "rgb(0, 23, 47)",
    },
    text: {
        color: "white",
    }
})