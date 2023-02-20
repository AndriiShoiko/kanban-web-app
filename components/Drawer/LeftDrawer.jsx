import { useContext } from "react";

import { Drawer } from "@mui/material";
import { styled } from '@mui/material/styles';

import Image from "next/image";
import logo from "../../public/images/main-logo.svg";

import { useDrawerIsOpen } from '../../hooks/useDrawerIsOpen';
import { BoardsList } from "./BoardsList";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HideSidebar } from "./HideSidebar";

import { ThemeContext } from "../../store/ThemeContext";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: theme.components.drawer.widthDesktop,
        boxSizing: 'border-box',
    }
}));

const StyledDrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    ...theme.mixins.toolbar,
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
}));

export const DrawerHeader = () => {
    return (
        <StyledDrawerHeader>
            <Image src={logo} width={153} height={25} alt="main logo" />
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
            {...props}>
            <DrawerHeader />
            <BoardsList />
            <ThemeSwitcher />
            <HideSidebar onClick={() => context.toogleDrawerIsOpen()} />
        </StyledDrawer>
    )
}