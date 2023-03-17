import { useContext } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ThemeContext } from "../../store/ThemeContext";

import { Header } from "../Header";
import { DrawerHeader, LeftDrawer } from "../Drawer";

import { useDrawerIsOpen } from "../../hooks/useDrawerIsOpen";

import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const StyledMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  flexGrow: 1,
  marginLeft: 0,

  height: `calc(100vh - ${theme.components.header.heightDesktop})`,
  [theme.breakpoints.down("md")]: {
    height: `calc(100vh - ${theme.components.header.heightTablet})`,
  },

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.components.drawer.widthDesktop,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.components.drawer.widthTablet,
    },
  }),
}));

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
  bottom: theme.spacing(4),
}));

const HeaderAndDrawer = (props) => {
  const context = useContext(ThemeContext);

  return (
    <>
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
    </>
  );
};

export default HeaderAndDrawer;
