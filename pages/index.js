import { Typography } from "@mui/material";

import { Layout } from "../components/Layout";

import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { ButtonDestructive } from "../ui/buttons/ButtonDestructive";
import { ButtonPrimaryL } from "../ui/buttons/ButtonPrimaryL";
import { ButtonPrimaryS } from "../ui/buttons/ButtonPrimaryS";
import { ButtonSecondary } from "../ui/buttons/ButtonSecondary";

const HomePage = () => {

    const theme = useContext(ThemeContext);

    return (
        <Layout>
            <Typography variant="h1">Welcome to Next.js!</Typography>
            <Typography variant="h2">Welcome to Next.js!</Typography>
            <Typography variant="h3">Welcome to Next.js!</Typography>
            <Typography variant="h4">Welcome to Next.js!</Typography>
            <Typography variant="body1">Body (L) - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna.
                In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero,
                faucibus adipiscing, commodo quis, gravida id, est.</Typography>
            <Typography variant="body2">Welcome to Next.js!</Typography>

            <Typography variant="h1">{theme.mode}</Typography>
            <ButtonPrimaryL onClick={() => theme.toogleThemeMode()}>
                Button Primary (L)
            </ButtonPrimaryL>
            <ButtonPrimaryS onClick={() => theme.toogleThemeMode()}>
                Button Primary (S)
            </ButtonPrimaryS>
            <ButtonSecondary onClick={() => theme.toogleThemeMode()}>
                Button Secondary
            </ButtonSecondary>
            <ButtonDestructive onClick={() => theme.toogleThemeMode()}>
                Button Destructive
            </ButtonDestructive>
        </Layout>
    )
}

export default HomePage;