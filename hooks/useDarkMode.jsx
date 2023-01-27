import { useContext } from "react";
import { ThemeContext, DARK_MODE } from "../store/ThemeContext";

export const useDarkMode = () => {
    const theme = useContext(ThemeContext);
    return theme.mode === DARK_MODE;
}