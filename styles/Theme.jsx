import { createTheme } from '@mui/material/styles';

const darkBG = "#20212C";
const darkGrey = "#2B2C37";
const linesDark = "#3E3F4E";
const mediumGrey = "#828FA3";
const linesLight = "#E4EBFA";
const lightBG = "#F4F7FD";
const mainPurple = "#635FC7";
const mainPurpleHover = "#A8A4FF";
const red = "#EA5555";
const redHover = "#FF9898";

export const theme = createTheme(
    {
        palette: {
            mode: "light",
            common: {
                darkBG,
                darkGrey,
                linesDark,
                mediumGrey,
                linesLight,
                lightBG,
                mainPurple,
                mainPurpleHover,
                red,
                redHover
            }
        },
        typography: {
            h1: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "bold",
                fontSize: "1.5rem",
                lineHeight: "30px",
            },
            h2: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "bold",
                fontSize: "1.125rem",
                lineHeight: "23px"
            },
            h3: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "bold",
                fontSize: "0.9375rem",
                lineHeight: "19px"
            },
            h4: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "bold",
                fontSize: "0.75rem",
                lineHeight: "17px",
                letterSpacing: "2.4px",
                color: mediumGrey
            },
            body1: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "normal",
                fontSize: "0.8125rem",
                lineHeight: "23px",
                color: darkGrey
            },
            body2: {
                fontFamily: "Plus Jakarta Sans",
                fontWeight: "bold",
                fontSize: "0.75rem",
                lineHeight: "15px",
                color: darkGrey
            }
        },
    }
);