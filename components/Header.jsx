import { useContext } from "react";

import { AppBar, Toolbar, Typography, Stack, Divider, IconButton, Link } from '@mui/material';
import { ThemeContext } from "../store/ThemeContext";

import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Image from "next/image";
import logo from "../public/images/main-logo.svg";

import { ButtonPrimaryL } from '../ui/buttons/ButtonPrimaryL';
import { useDrawerIsOpen } from '../hooks/useDrawerIsOpen';

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    alignItems: "center",

    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${theme.components.drawer.widthDesktop})`,
        marginLeft: theme.components.drawer.widthDesktop,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const dividerStyle = (theme) => ({
    marginLeft: "32px",
    marginRight: "32px",
})

export const Header = (props) => {

    const theme = useContext(ThemeContext);

    return (
        <StyledAppBar position="fixed" open={useDrawerIsOpen()} {...props}>
            <Toolbar sx={{ width: "100%" }}>
                <Stack component={Link} sx={{ cursor: "pointer" }}>
                    <Image src={logo} width={153} height={25} alt="main logo" onClick={() => console.log("click")} />
                </Stack>
                <Divider orientation="vertical" flexItem sx={dividerStyle} />
                <Typography variant="h1" color="#000112">
                    Platform Launch
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "auto" }}>
                    <ButtonPrimaryL>+ Add New Task</ButtonPrimaryL>
                    <IconButton onClick={() => theme.toogleDrawerIsOpen()}>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </StyledAppBar>
    )
}
