import { createContext, useState } from "react";

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const ThemeContext = createContext({
    mode: LIGHT_MODE,
    drawerIsOpen: false,
    toogleThemeMode: () => { },
    toogleDrawerIsOpen: () => { }
});

export const ThemeContextProvider = (props) => {

    const [mode, setMode] = useState(LIGHT_MODE);
    const [drawerIsOpen, setdrawerOpen] = useState(false);

    const toogleThemeMode = () => {
        if (mode === LIGHT_MODE) {
            setMode(DARK_MODE);
        } else {
            setMode(LIGHT_MODE);
        }
    }

    const toogleDrawerIsOpen = () => {
        if (drawerIsOpen) {
            setdrawerOpen(false);
        } else {
            setdrawerOpen(true);
        }
    }

    const context = {
        mode,
        drawerIsOpen,
        toogleThemeMode,
        toogleDrawerIsOpen
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    )
}