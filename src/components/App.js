import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import DetailView from "./DetailView";
import OverView from "./Overview";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '2px solid rgba(50, 150, 220, .4)',
        // borderRadius: '5px',
    },
    assistView: {
        position: 'absolute',
        top: 70,
        height: 110,
        left: 70,
        width: 200,
    },
    controlPanel: {
        position: 'absolute',
        top: 180,
        bottom: 400,
        left: 70,
        width: 200,
    },
    detailView: {
        position: 'absolute',
        top: 70,
        bottom: 400,
        left: 271,
        right: 70,
    },
    overView: {
        position: 'absolute',
        bottom: 70,
        height: 329,
        left: 70,
        right: 70,
    },
}))

function App() {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={clsx(classes.view, classes.assistView)}><AssistView/></div>
        <div className={clsx(classes.view, classes.controlPanel)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.overView)}><OverView/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
    </div>;
}

export default App;
