import React from "react";
import { makeStyles, Card } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        padding: "20px",
    }
})

export default (props) => {
    const styles = useStyles();
    return (
        <Card className={ styles.card } { ...props }>
            { props.children }
        </Card>
    )
}