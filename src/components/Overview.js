import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function OverView() {
    const {state} = useContext(store);

    const getOption = () => {
        let data_ = [];
        if (state.left != null){
          for (let index = state.left; index <= state.right; index++) {
            if (state.new[0][index] < 0)state.new[0][index] = 0;
            data_[index-state.left] = [state.uvb[0][index], state.new[0][index]];
          }
            return {
              title:{text: 'Impact of UVB',
            left: 'center'},
              animation: true,
              tooltip: {
                padding:10,
                trigger: 'item',
                axisPointer: {
                    type: 'cross'
                }
              },
              xAxis: {
                scale: true
              },
              yAxis: {
                  scale: true
              },
              series: [{
                
                  type: 'scatter',
                  data: data_,
                  itemStyle: {
                    normal: {
                        opacity: 0.5
                    },
                    color: 125
                  }
              }]
            }
        }
        else{
            return {
              animation: true,
              tooltip: {
                trigger: 'item',
                axisPointer: {
                    type: 'cross'
                }
              },
              xAxis: {
                  scale: true
              },
              yAxis: {
                  scale: true
              },
              dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 35
                },
                {
                    type: 'inside',
                    xAxisIndex: [0],
                    start: 1,
                    end: 35
                }
            ],
    
              series: [{
                  type: 'scatter',
                  data: [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]],
                  itemStyle: {
                    normal: {
                        opacity: 0.5
                    },
                    color: 125
                  }
                  
              }]
          }
        }
    };

    return <div>
      <div className="box1">    <ReactEcharts option={getOption()}
    style={{ height: "35vh", left: 0, top: 0, width: "30vw" }}
    opts={{ renderer: "svg" }}/></div>
    <div className="box2">
    <iframe src="http://liunick2000.club/index7142.html" width='500' height='325' title="navigation"></iframe>
    </div>
    </div>
}

export default OverView;