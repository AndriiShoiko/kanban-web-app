import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../../styles/Theme";

export const Layout = (props) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </>
    )
}