import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function Overview() {
    const {state} = useContext(store);

    const getOption = () => {
            if (state.left != null){
                console.log(state.cases[0].slice(64, 69))
                return {
                    xAxis: {
                        type: 'category',
                        data: state.date[0].slice(state.left, state.right)
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: state.cases[0].slice(state.left, state.right),
                        type: 'line'
                    }]
                }
            }
            else{
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
            }
    };

    return <ReactEcharts option={getOption()}/>;
}

export default Overview;