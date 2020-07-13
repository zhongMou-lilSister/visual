import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

function Detailview() {
  const {state} = useContext(store);

  const getOption = () => {
    let data_ = [];
          if (state.left != null){
            for (let index = state.left; index <= state.right; index++) {
              if (state.new[0][index] < 0)state.new[0][index] = 0;
              data_[index-state.left] = [state.uvb[0][index], state.new[0][index]];
            }
              return {
                xAxis: {
                  scale: true
                },
                yAxis: {
                    scale: true
                },
                series: [{
                    type: 'scatter',
                    data: data_,
                }]
              }
          }
          else{
              return {
                xAxis: {
                    scale: true
                },
                yAxis: {
                    scale: true
                },
                series: [{
                    type: 'scatter',
                    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6]],
                }]
            }
          }
  };

  return <ReactEcharts option={getOption()}/>;
}

export default Detailview;
