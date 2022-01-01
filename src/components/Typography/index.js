import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        fontSize: (props) => props.fontSize,
        fontWeight: (props) => props.fontWeight,
        padding: '2px 0'
    }
})

export default (props) => {
    const styles = useStyles(props);
    return (
        <Typography className={ styles.root } { ...props }>
            { props.children }
        </Typography>
    )
}