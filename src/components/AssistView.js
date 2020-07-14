import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function AssistView() {
    const {state} = useContext(store);
    const {dispatch} = useContext(store);
    return <div></div>;
}

export default AssistView;
