import { defaultTheme as theme } from "./Theme"
import { ThemeProvider } from "@mui/material/styles"
import Nav from "./components/Nav"
import AboutMe from './components/AboutMe'
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import BottomNav from "./components/BottomNav"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <AboutMe />
            <Experience />
            <Skills />
            <Projects />
            <BottomNav />
        </ThemeProvider>
    )
}

export default App