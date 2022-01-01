import React from "react";
import { Button, createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        fontWeight: 'bold',
        borderRadius: '10px',
        padding: '10px 40px',
    }
})

const theme = createTheme({
    palette: {
        primary: {
            main: '#02228B',
            contrastText: '#FFF'
        }
    }
})

export default (props) => {
    const styles = useStyles(props);
    return (
        <ThemeProvider theme={ theme }>
            <Button className={ styles.root } { ...props }>
                { props.children }
            </Button>
        </ThemeProvider>
    )
}