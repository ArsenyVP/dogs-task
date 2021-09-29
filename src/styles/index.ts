import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    img: {
        width: 400,
        height: "auto"
    },
    containerInputs: {
        margin: "50px 0",
        display: "flex",
        justifyContent: "space-evenly"
    },
    title: {
        marginTop: 20,
        textAlign: "center"
    },
    containerImages: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    fieldBox: {
        marginRight: 100
    },
    formContainer: {
        display: "flex"
    },
    error: {
        color: "red",
        textAlign: "center",
        margin: 0
    }
})
