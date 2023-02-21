
import { AppBar, Toolbar, Typography, Stack, Divider, IconButton, Collapse } from '@mui/material';

import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { ButtonPrimaryL } from '../../ui/buttons/ButtonPrimaryL';
import { useDrawerIsOpen } from '../../hooks/useDrawerIsOpen';
import { useDarkMode } from "../../hooks/useDarkMode";
import { MainLogo } from '../../ui/Logos/MainLogo';

const StyledAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    shouldForwardProp: (prop) => prop !== 'darkMode',
})(({ theme, open, darkMode }) => ({
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.divider,

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

    ...(darkMode && {
        backgroundColor: theme.palette.common.darkGrey,
    }),
}));

const dividerStyle = (theme) => ({
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
})

export const Header = (props) => {

    const drawerIsOpen = useDrawerIsOpen();

    return (
        <StyledAppBar position="fixed" open={drawerIsOpen} darkMode={useDarkMode()} {...props}>
            <Toolbar sx={{
                width: "100%",
                color: 'text.primary',
                backgroundColor: "inherit",
            }}>

                <Collapse orientation="horizontal" in={!drawerIsOpen}>
                    <MainLogo />
                </Collapse>

                {!drawerIsOpen &&
                    <Divider orientation="vertical" flexItem sx={dividerStyle} />
                }

                <Typography variant="h1">
                    Platform Launch
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ marginLeft: "auto" }}>
                    <ButtonPrimaryL>+ Add New Task</ButtonPrimaryL>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Stack>

            </Toolbar>
        </StyledAppBar>
    )
}
