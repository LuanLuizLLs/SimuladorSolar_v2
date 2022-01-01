import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
    }
})

export default function Home() {
    const styles = useStyles();
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={ styles.container }
        >
            <Grid item>
                <Card>
                    <Box textAlign="center">
                        <Typography fontWeight="bold" variant="h6">
                            A sua inteligência em energia solar!
                        </Typography>
                    </Box>
                    <Box paddingTop={4} textAlign="center">
                        <Button variant="contained" color="primary" size="large" href="/simulation">
                            Simular
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}