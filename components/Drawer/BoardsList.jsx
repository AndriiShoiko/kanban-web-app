import { Tabs, Tab, Typography } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext";

const TabsStyled = styled(Tabs)(({ theme }) => ({
  textDecoration: "none",
  height: "100%",
}));

const TabStyled = styled(Tab, {
  shouldForwardProp: (prop) => prop !== "newBoard",
})(({ theme, newBoard }) => ({
  justifyContent: "flex-start",
  color: theme.palette.common.mediumGrey,
  opacity: 1,
  padding: 0,
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
  },
  marginRight: "32px",
  minHeight: "48px",
  height: "48px",
  borderRadius: "0px 100px 100px 0px",

  "&:hover": {
    backgroundColor: theme.palette.menuHover.backgroundColor,
    color: theme.palette.common.mainPurple,
  },

  "&.Mui-selected": {
    backgroundColor: theme.palette.common.mainPurple,
    color: theme.palette.common.white,
  },

  ...(newBoard && {
    backgroundColor: "inherit",
    color: theme.palette.common.mainPurple,
    "&.Mui-selected": {
      backgroundColor: "inherit",
      color: theme.palette.common.mainPurple,
    },
  }),
}));

const headerStyle = (theme) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(3),
  },
});

export const BoardsList = () => {
  const context = useContext(ThemeContext);

  const handleClick = (event) => {
    context.setActiveBoardIndex(event.target.tabIndex);
  };

  return (
    <>
      <Typography variant="h4" sx={headerStyle}>
        ALL BOARDS ({context.boardsList.length})
      </Typography>
      <TabsStyled
        orientation="vertical"
        variant="scrollable"
        value={context.activeBoardIndex}
        onClick={handleClick}
      >
        {context.boardsList.map((element, index) => {
          return (
            <Link key={index} href={element} passHref legacyBehavior>
              <TabStyled
                key={index}
                icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />}
                label={element}
                iconPosition="start"
                wrapped
                component="a"
                tabIndex={index}
                selected={context.activeBoardIndex === index}
              />
            </Link>
          );
        })}

        <Link href="/newBoard" passHref legacyBehavior>
          <TabStyled
            icon={<DashboardCustomizeOutlinedIcon sx={{ fontSize: 16 }} />}
            label="+ Create New Board"
            iconPosition="start"
            wrapped
            newBoard
            component="a"
          />
        </Link>
      </TabsStyled>
    </>
  );
};
