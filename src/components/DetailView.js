import React, {Component} from 'react';
import ReactEcharts from "echarts-for-react";
import { populationDataFemale } from "./DataFemale";
import { populationDataMale } from "./DataMale";

class DetailView extends Component {
  
    getOption = () => {
        let districts = [];
        let years = [];
        Object.entries(populationDataFemale).forEach(entry => {
          years = [...years, entry[0]];
          entry[1].forEach(e => {
            districts = [...new Set([...districts, e.name])];
          });
        });
    
        let options = years.map(year => {
          let obj = {};
          obj.title = {
            text: `Population of Singapore by District, ${year}`
          };
          obj.series = [
            {
               stack: "group",
               data: populationDataFemale[year]
            },
            {
               stack: "group",
               data: populationDataMale[year]
            }
          ];
          return obj;
        });
        return {
          baseOption: {
            timeline: {
                autoPlay: true,
                axisType: "category",
                bottom: 300,
                data: years,
                height: null,
                inverse: true,
                left: null,
                orient: "vertical",
                playInterval: 1000,
                right: 0,
                top: 20,
                width: 55, 
                label: {
                  normal: {
                    textStyle: {
                      color: "#aaa"
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: "#555"
                    }
                  }
                },
              symbol: "none",
              lineStyle: { 
                color: "#aaa"
              },
              checkpointStyle: {
                color: "#1145F6",
                borderColor: "transparent",
                borderWidth: 2
              },
              controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                  color: "#114E11",
                  borderColor: "#354EF6"
                },
                emphasis: {
                  color: "#5d7111",
                  borderColor: "#5d7111"
                }
              }
            },
            color: ["#e91e59 ", "#35ccF6"],
            title: {
              subtext: "Data from the Singapore Department of Statistics",
              textAlign: "left",
              left: "8%"
            },
            tooltip: { backgroundColor: "#555", borderWidth: 0, padding: 10},
            legend: {
              data: ["Female", "Male"],
              itemGap: 35,
              itemHeight: 18,
              right: "11%",
              top: 20
            },
            calculable: true,
            grid: {
              top: 100,
              bottom: 410,
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                  label: {
                    show: true,
                    formatter: function(params) {
                      return params.value.replace("\n", "");
                    }
                  }
                }
              }
            },
            xAxis: [
              {
                axisLabel: {
                  interval: 0,
                  rotate: 45,
                  textStyle: {
                    baseline: "top",
                    color: "#333",
                    fontSize: 10,
                    fontWeight: "bold"
                  }
                },
                axisLine: { lineStyle: { color: "#aaa" }, show: true },
                axisTick: { show: false },
                data: districts,
                splitLine: { show: false },
                type: "category"
              }
            ],
            yAxis: [
              {
                axisLabel: {
                  textStyle: { fontSize: 10 }
                },
                axisLine: { show: false },
                axisTick: { show: false },
                name: "Population",
                splitLine: {
                  lineStyle: {
                    type: "dotted"
                  }
                },
                type: "value"
              }
            ],
            series: [{ name: "Female", type: "bar" }, { name: "Male", type: "bar" }]
          },
          options: options
        };
    
      }
      render() {
        return (
          <ReactEcharts
            option={this.getOption()}
            style={{ height: "80vh", left: 0, top: 0, width: "75vw" }}
            opts={{ renderer: "svg" }}
          />
        );
      }
    }
export default DetailView;
