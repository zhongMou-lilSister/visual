// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import DetailView from "./DetailView";
import Overview from "./Overview";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    view: {
        border: '1px solid black',
        // borderRadius: '5px',
    },
    controlPanel: {
        position: 'absolute',
        top: 70,
        height: 100,
        left: 70,
        width: 200,
    },
    assistView: {
        position: 'absolute',
        top: 180,
        bottom: 70,
        left: 70,
        width: 200,
    },
    overview: {
        position: 'absolute',
        top: 70,

        left: 280,
        right: 70,
    },
    detailView: {
        position: 'absolute',
        bottom: 220,
        height: 320,
        left: 280,
        right: 70,
    },
}))

// App组件
function App() {
    const classes = useStyles();

    // 使用classes.root使用样式中定义的root类
    // 可视化项目中，若干视图一般采用绝对布局，方便后续调整各个视图的位置与大小
    // 目前四个视图都是一样的，查看AssistView的注释
    return <div className={classes.root}>
        <div className={clsx(classes.view, classes.controlPanel)}><AssistView/></div>
        <div className={clsx(classes.view, classes.assistView)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.overview)}><DetailView/></div>
        <div className={clsx(classes.view, classes.detailView)}><Overview/></div>
    </div>;
}

export default App;
