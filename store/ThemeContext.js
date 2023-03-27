import { createContext, useEffect, useState } from "react";
import { getThemeModeFromLocalstorage, setThemeModeToLocalstorage } from "../utils/workWithLocalStogage";

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const ThemeContext = createContext({
    mode: LIGHT_MODE,
    drawerIsOpen: false,
    boardsList: [],
    activeBoardIndex: 0,

    toogleThemeMode: () => { },
    toogleDrawerIsOpen: () => { },
    setBoardsList: () => { },
    setActiveBoardIndex: () => { }
});

export const ThemeContextProvider = (props) => {

    const [mode, setMode] = useState(LIGHT_MODE);
    const [drawerIsOpen, setdrawerOpen] = useState(false);
    const [boardsList, setList] = useState([]);
    const [activeBoardIndex, setIndex] = useState(0);

    useEffect(() => setMode(getThemeModeFromLocalstorage()), []);

    const toogleThemeMode = () => {
        if (mode === LIGHT_MODE) {
            setMode(DARK_MODE);
            setThemeModeToLocalstorage(DARK_MODE);
        } else {
            setMode(LIGHT_MODE);
            setThemeModeToLocalstorage(LIGHT_MODE);
        }
    }

    const toogleDrawerIsOpen = () => {
        if (drawerIsOpen) {
            setdrawerOpen(false);
        } else {
            setdrawerOpen(true);
        }
    }

    const setBoardsList = (list) => {
        setList(list);
    }

    const setActiveBoardIndex = (index) => {
        setIndex(index);
    }

    const context = {
        mode,
        drawerIsOpen,
        boardsList,
        activeBoardIndex,
        toogleThemeMode,
        toogleDrawerIsOpen,
        setBoardsList,
        setActiveBoardIndex
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    )
}