import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";



function DetailView() {
  const {state} = useContext(store);
  const getOption = () => {
          if (state.left != null){
            console.log(state.choice);
              // 计算温度的最低值，将其作为Y轴下限
              let TempArray = state.temp[0].slice(state.left, state.right).map(Number)
              let TempArray1 = []
              // 建了一个新数组TempArray1来保存原数组中非0的数
              for(let i in TempArray){
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
            let data2 = {
              "name": "Pandemic",
              "children": [
                  {
                      "name": "Geographical",
                      "children": [
                          {"name": "Region Area", "value": 4116},
                          {"name": "Population", "value": 5000}
                      ]
                  },
                  {
                      "name": "Natural",
                      "children": [
                          {"name": "UVB Value", "value": 2105},
                          {"name": "Temperature", "value": 1316},
                          {"name": "Dewpoint", "value": 3151},
                     ]
                  },
                  {
                      "name": "Economic",
                      "children": [
                          {"name": "GDP", "value": 8833}
                     ]
                  }
              ]
            };
              return {
                title: {
                  text: 'A study on the possible variables related to the pandemic',
                  left: 'center'
                  },
                  tooltip: {
                      trigger: 'item',
                      triggerOn: 'mousemove'
                  },
                  series:[
                      {
                          type: 'tree',
                          name: 'tree2',
                          data: [data2],
              
                          top: '20%',
                          left: '10%',
                          bottom: '12%',
                          right: '10%',
              
                          symbolSize: 12,
              
                          label: {
                              position: 'left',
                              verticalAlign: 'middle',
                              align: 'right'
                          },
              
                          leaves: {
                              label: {
                                  position: 'right',
                                  verticalAlign: 'middle',
                                  align: 'left'
                              }
                          },
              
                          expandAndCollapse: true,
              
                          animationDuration: 550,
                          animationDurationUpdate: 750
                      }
                  ]
              }
          }
  };
  return <ReactEcharts option={getOption()}
            style={{ height: "47vh", left: 0, top: 0, width: "80vw" }}
            opts={{ renderer: "svg" }}/>          
}

export default DetailView;
