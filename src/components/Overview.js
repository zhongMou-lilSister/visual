import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function Overview() {
    const {state} = useContext(store);

    const getOption = () => {

        // const thisdate = (state.date[0]).slice(50, 55);
        // const thisNew = (state.new[0]).slice(50, 55);
        console.log(state.date);
        // change your data to an option here
        return {
            xAxis: {
                type: 'category',
                data: [1, 2, 3]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1, 2, 3],
                type: 'line'
            }]
        }
    };

    return <ReactEcharts option={getOption()}/>;
}

export default Overview;