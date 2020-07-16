// 本文件是界面UI的根目录

import React from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import AssistView from "./AssistView";
import ControlPanel from "./ControlPanel";
import DetailView from "./DetailView";
import OverView from "./Overview";

// 这是JSS的写法，相当于声明了一些css的类
const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'visible',
    },
    view: {
        border: '2px solid rgba(50, 150, 220, .4)',
        // borderRadius: '5px',
    },
    assistView: {
        position: 'absolute',
        top: 0,
        height: 130,
        left: 70,
        width: 200,
    },
    controlPanel: {
        position: 'absolute',
        top: 130,
        bottom: 230,
        left: 70,
        width: 200,
    },
    detailView: {
        position: 'absolute',
        top: 0,
        //bottom: 230,
        left: 271,
        right: 70,
    },
    overView: {
        position: 'absolute',
        // bottom: 70,
        height: 415,
        left: 70,
        right: 70,
        top: 420,
    },
}))

// App组件
function App() {
    const classes = useStyles();

    // 使用classes.root使用样式中定义的root类
    // 可视化项目中，若干视图一般采用绝对布局，方便后续调整各个视图的位置与大小
    // 目前四个视图都是一样的，查看AssistView的注释
    return <div className={classes.root}>
        <div className={clsx(classes.view, classes.assistView)}><AssistView/></div>
        <div className={clsx(classes.view, classes.controlPanel)}><ControlPanel/></div>
        <div className={clsx(classes.view, classes.overView)}><OverView/></div>
        <div className={clsx(classes.view, classes.detailView)}><DetailView/></div>
    </div>;
}

export default App;
