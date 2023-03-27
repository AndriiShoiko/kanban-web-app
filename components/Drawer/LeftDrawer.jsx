import { useContext } from "react";

import { Drawer } from "@mui/material";
import { styled } from '@mui/material/styles';

import { useDarkMode } from "../../hooks/useDarkMode";

import { useDrawerIsOpen } from '../../hooks/useDrawerIsOpen';
import { BoardsList } from "./BoardsList";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HideSidebar } from "./HideSidebar";

import { ThemeContext } from "../../store/ThemeContext";
import { MainLogo } from "../../ui/Logos/MainLogo";

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'darkMode'
})(({ theme, darkMode }) => ({
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: theme.components.drawer.widthDesktop,
        [theme.breakpoints.down('md')]: {
            width: theme.components.drawer.widthTablet,
        },
        boxSizing: 'border-box',
        ...(darkMode && {
            backgroundColor: theme.palette.common.darkGrey,
        }),
    }
}));

const StyledDrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    ...theme.mixins.toolbar,
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3),      
    },
}));

export const DrawerHeader = () => {
    return (
        <StyledDrawerHeader>
            <MainLogo />
        </StyledDrawerHeader>
    )
}

export const LeftDrawer = (props) => {

    const context = useContext(ThemeContext);

    return (
        <StyledDrawer
            variant="persistent"
            anchor="left"
            open={useDrawerIsOpen()}
            darkMode={useDarkMode()}
            {...props}>
            <DrawerHeader />
            <BoardsList />
            <ThemeSwitcher onChange={() => context.toogleThemeMode()} />
            <HideSidebar onClick={() => context.toogleDrawerIsOpen()} />
        </StyledDrawer>
    )
}