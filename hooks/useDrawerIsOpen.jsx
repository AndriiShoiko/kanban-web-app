import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

export const useDrawerIsOpen = () => {
    const theme = useContext(ThemeContext);
    return theme.drawerIsOpen;
}