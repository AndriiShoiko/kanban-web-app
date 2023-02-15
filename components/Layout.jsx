import { Box } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { Header } from './Header';
import { LeftDrawer } from "./LeftDrawer";

import { theme } from "../styles/Theme";
import { useDrawerIsOpen } from '../hooks/useDrawerIsOpen';


const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        marginLeft: 0,
        backgroundColor: theme.palette.common.lightBG,
        marginTop: "64px",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: theme.components.drawer.widthDesktop,
        }),
    }),
);

export const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex" }}>
                <Header />
                <LeftDrawer />
                <StyledMain component="main" open={useDrawerIsOpen()}>
                    {props.children}
                </StyledMain>
            </Box>
        </ThemeProvider>
    )
}