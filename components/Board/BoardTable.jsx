import { Grid } from "@mui/material"
import { CardTask } from "./CardTask/CardTask"
import { HeaderColumn } from "./HeaderColumn"
import { NewColumn } from "./NewColumn"

export const BoardTable = () => {
    return (
        <Grid container columnGap={3} padding="24px" height="100%" wrap>
            <Grid item>
                <Grid container direction="column" rowGap={2}>
                    <Grid item>
                        <HeaderColumn />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" rowGap={2}>
                    <Grid item>
                        <HeaderColumn />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                    <Grid item>
                        <CardTask />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <NewColumn />
            </Grid>
        </Grid>
    )
}

