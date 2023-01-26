import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

const HomePage = () => {

    const theme = useContext(ThemeContext);

    return (
        <>
            <Typography variant="h1">Welcome to Next.js!</Typography>
            <Typography variant="h2">Welcome to Next.js!</Typography>
            <Typography variant="h3">Welcome to Next.js!</Typography>
            <Typography variant="h4">Welcome to Next.js!</Typography>
            <Typography variant="body1">Welcome to Next.js!</Typography>
            <Typography variant="body2">Welcome to Next.js!</Typography>

            <Typography variant="h1">{theme.mode}</Typography>
            <button onClick={() => theme.toogleThemeMode()}>
                Change theme
            </button>
        </>
    )
}

export default HomePage;