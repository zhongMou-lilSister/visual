import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";


function Detailview() {
    const {state} = useContext(store);

    const getOption = () => {
            if (state.left != null){
                // 计算温度的最低值，将其作为Y轴下限
                let TempArray = state.temp[0].slice(state.left, state.right).map(Number)
                let TempArray1 = []
                // 建了一个新数组TempArray1来保存原数组中非0的数
                for(var i in TempArray){
                    if(TempArray[i]!==0){
                        TempArray1.push(TempArray[i]);
                    } }
                let TempMin = Math.min(...TempArray1) -3 //减去3是为了不让数据点和x轴重合
                
                return {
                    title: {
                        text: 'Relationship between new cases and temperature',
                        subtext: 'XXXXX',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    legend: {
                        data: ['temperature', 'new'],
                        left: 10
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    axisPointer: {
                        link: {xAxisIndex: 'all'}
                    },
                    dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 40,
                            end: 60,
                            xAxisIndex: [0, 1]
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 40,
                            end: 70,
                            xAxisIndex: [0, 1]
                        }
                    ],
                    grid: [{
                        left: 50,
                        right: 50,
                        height: '35%'
                    }, {
                        left: 50,
                        right: 50,
                        top: '55%',
                        height: '35%'
                    }],
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: state.date[0].slice(state.left, state.right).map(function (str) {
                                return str.replace('/2020', '');})
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: state.date[0].slice(state.left, state.right).map(function (str) {
                                return str.replace('/2020', '');}),
                            position: 'top'
                        }
                    ],
                    yAxis: [
                        {
                            name: 'temperature(K)',
                            type: 'value',
                            // max: 310,
                            min: TempMin,
                        },
                        {
                            gridIndex: 1,
                            name: 'new',
                            type: 'value',
                            inverse: true,
                            // max: 1000,
                            
                        }
                    ],
                    series: [
                        {
                            name: 'temperature',
                            type: 'line',
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: state.temp[0].slice(state.left, state.right)
                        },
                        {
                            name: 'new',
                            type: 'line',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: state.new[0].slice(state.left, state.right)
                        }
                    ]
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

export default Detailview;

// function Detailview() {
//   const {state} = useContext(store);

//   const getOption = () => {
//     let data_ = [];
//           if (state.left != null){
//             for (let index = state.left; index <= state.right; index++) {
//               if (state.new[0][index] < 0)state.new[0][index] = 0;
//               data_[index-state.left] = [state.uvb[0][index], state.new[0][index]];
//             }
//               return {
//                 xAxis: {
//                   scale: true
//                 },
//                 yAxis: {
//                     scale: true
//                 },
//                 series: [{
//                     type: 'scatter',
//                     data: data_,
//                 }]
//               }
//           }
//           else{
//               return {
//                 xAxis: {
//                     scale: true
//                 },
//                 yAxis: {
//                     scale: true
//                 },
//                 series: [{
//                     type: 'scatter',
//                     data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6]],
//                 }]
//             }
//           }
//   };

//   return <ReactEcharts option={getOption()}/>;
// >>>>>>> 61893fa914e4f78b82fcd1f836956e23495191ce
// }

