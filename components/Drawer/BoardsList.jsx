import { useState } from 'react';
import { Tabs, Tab, Link, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

const TabsStyled = styled(Tabs)(({ theme }) => ({
    textDecoration: "none",
    height: "100%"
}));

const TabStyled = styled(Tab, { shouldForwardProp: (prop) => prop !== 'newBoard' })(({ theme, newBoard }) => ({
    justifyContent: "flex-start",
    color: theme.palette.common.mediumGrey,
    padding: 0,
    paddingLeft: theme.spacing(4),
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
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
})

export const BoardsList = () => {

    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" sx={headerStyle}>
                ALL BOARDS (3)
            </Typography>
            <TabsStyled orientation='vertical'
                variant='scrollable'
                component={Link}
                value={value}
                onChange={handleChange}
            >
                <TabStyled icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />} label="Item One" iconPosition="start" wrapped />
                <TabStyled icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />} label="Item Two" iconPosition="start" wrapped />
                <TabStyled icon={<DashboardOutlinedIcon sx={{ fontSize: 16 }} />} label="Item Three" iconPosition="start" wrapped />

                <TabStyled icon={<DashboardCustomizeOutlinedIcon sx={{ fontSize: 16 }} />} label="+ Create New Board" iconPosition="start" wrapped newBoard />
            </TabsStyled>
        </>

    )
}
