import { useContext, useMemo } from "react";
import { Box, Button, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';

import { ThemeContext } from "../../store/ThemeContext";
import { theme as customTheme } from "../../styles/Theme";

import { Header } from '../Header';
import { DrawerHeader, LeftDrawer } from "../Drawer";

import { useDrawerIsOpen } from '../../hooks/useDrawerIsOpen';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        marginLeft: 0,
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

const StyledOpenDrawer = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.mainPurple,
    width: 56,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0px 100px 100px 0px",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: theme.palette.common.mainPurpleHover,
    },
    position: "absolute",
    left: 0,
    bottom: theme.spacing(4)
}));

export const Layout = (props) => {

    const context = useContext(ThemeContext);

    const theme = useMemo(
        () => {
            let baseTheme = { ...customTheme };
            baseTheme.palette.mode = context.mode;

            if (context.mode === "dark") {
                baseTheme.palette.background.default = baseTheme.palette.common.darkBG;
                baseTheme.palette.menuHover.backgroundColor = "white";
            } else {
                baseTheme.palette.background.default = baseTheme.palette.common.lightBG;
                baseTheme.palette.menuHover.backgroundColor = alpha(baseTheme.palette.common.mainPurple, 0.1);
            }

            return createTheme(baseTheme);
        },
        [context.mode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: "flex" }}>
                <Header />
                <LeftDrawer />
                <StyledMain component="main" open={useDrawerIsOpen()}>
                    <DrawerHeader />
                    {props.children}
                </StyledMain>
            </Box>
            <StyledOpenDrawer onClick={() => context.toogleDrawerIsOpen()}>
                <VisibilityOffOutlinedIcon />
            </StyledOpenDrawer>
        </ThemeProvider>
    )
}