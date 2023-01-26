import { createContext, useState } from "react";

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const ThemeContext = createContext({
    mode: LIGHT_MODE,
    toogleThemeMode: () => { }
});

export const ThemeContextProvider = (props) => {

    const [mode, setMode] = useState(LIGHT_MODE);

    const toogleThemeMode = () => {
        if (mode === LIGHT_MODE) {
            setMode(DARK_MODE);
        } else {
            setMode(LIGHT_MODE);
        }
    }

    const context = {
        mode: mode,
        toogleThemeMode: toogleThemeMode
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    )
}