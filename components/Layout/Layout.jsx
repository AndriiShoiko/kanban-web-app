import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { Header } from '../Header';
import { DrawerHeader, LeftDrawer } from "../Drawer";

import { theme } from "../../styles/Theme";
import { useDrawerIsOpen } from '../../hooks/useDrawerIsOpen';
import { ThemeContext } from "../../store/ThemeContext";

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';


const StyledMain = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        marginLeft: 0,
        backgroundColor: theme.palette.common.lightBG,
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