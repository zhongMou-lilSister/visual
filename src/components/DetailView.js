import React, {useContext} from 'react';
import {store} from "../store";
import ReactEcharts from "echarts-for-react";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import WavesIcon from '@material-ui/icons/Waves';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import OpacityIcon from '@material-ui/icons/Opacity';
import PublicIcon from '@material-ui/icons/Public';
import CommuteIcon from '@material-ui/icons/Commute';

// 做tab分页选项卡
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {state} = useContext(store);
//   温度的图表
  const getOption1 = () => {
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
                text: `Relationship between new cases and temperature in ${state.region[0][state.left]}`,
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
//   紫外线的图表
  const getOption2 = () => {
    if (state.left != null){
        /* // 计算uvb的最低值，将其作为Y轴下限
        let UvbArray = state.uvb[0].slice(state.left, state.right).map(Number)
        let UvbArray1 = []
        // 建了一个新数组UvbArray1来保存原数组中非0的数
        for(var i in UvbArray){
            if(UvbArray[i]!==0){
                UvbArray1.push(UvbArray[i]);
            } }
        let TempMin = Math.min(...UvbArray1) -300 //减去300是为了不让数据点和x轴重合
        
        return {
            title: {
                text: `Relationship between new cases and uvb in ${state.region[0][state.left]}`,
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
                data: ['uvb', 'new'],
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
                    name: 'uvb',
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
                    name: 'uvb',
                    type: 'line',
                    symbolSize: 8,
                    hoverAnimation: false,
                    data: state.uvb[0].slice(state.left, state.right)
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
        } */
        let data_ = [];
        for (let index = state.left; index <= state.right; index++) {
            if (state.new[0][index] < 0)state.new[0][index] = 0;
            data_[index-state.left] = [state.uvb[0][index], state.new[0][index]];
          }
            return {
              title:{text: 'Impact of UVB',
            left: 'center'},
            tooltip:{},
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    start: 0,
                    end: 3500
                },
                {
                    type: 'inside',
                    xAxisIndex: [0],
                    start: 0,
                    end: 3500
                }
            ],
              animation: true,
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
  const getOption3 = () => {
    if (state.left != null){
    let data_ = [];
    for (let index = 189; index <= 62401; index++) {
            data_[parseInt((index - 189) / 192)] = [state.GDP[0][index], state.cases[0][index]];
      }
      return {
        title:{text: 'GDP-Total Cases Up to Date',
        left: 'center'},
        xAxis: {
            scale: true,
            name: 'GDP'
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
        dataZoom: [
            {
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                start: 0,
                end: 5000000000000
            },
            {
                type: 'inside',
                xAxisIndex: [0],
                start: 0,
                end: 5000000000000
            }
        ],
        yAxis: {
            scale: true,
            name: 'Total cases'
        },
        series: [{
            type: 'effectScatter',
            symbolSize: 8,
            data: [
                [state.GDP[0][state.right], state.cases[0][state.right]]
            ]
        }, {
            type: 'scatter',
            symbolSize: 4,
            data: data_,
        }]
      }
  }
}
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
            <Tooltip title="temperature" arrow><Tab label="Temperature" icon={<AcUnitIcon />} {...a11yProps(0)} /></Tooltip>
            <Tooltip title="uvb value" arrow><Tab label="UVB Value" icon={<WavesIcon />} {...a11yProps(1)} /></Tooltip>
            <Tooltip title="GDP" arrow><Tab label="GDP" icon={<MonetizationOnIcon />} {...a11yProps(2)} /></Tooltip>
            <Tooltip title="population" arrow><Tab label="Polulation" icon={<SupervisorAccountIcon />} {...a11yProps(3)} /></Tooltip>
            <Tooltip title="dew point" arrow><Tab label="dew point" icon={<OpacityIcon />} {...a11yProps(4)} /></Tooltip>
            <Tooltip title="land_KM2" arrow><Tab label="Region Area" icon={<PublicIcon />} {...a11yProps(5)} /></Tooltip>
            <Tooltip title="migration intensity in Wenzhou" arrow><Tab label="Migration Intensity"  icon={<CommuteIcon/>} {...a11yProps(6)} /></Tooltip>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ReactEcharts option={getOption1()}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReactEcharts option={getOption2()}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReactEcharts option={getOption3()}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
      123
      </TabPanel>
      <TabPanel value={value} index={6}>
      <iframe runat="server" id="iframes1" src="http://liunick2000.club/fenyeceshi/line-stack.php?city=温州" width="100%" height="290"  title="navigation" scrolling="no"></iframe>
      </TabPanel>
    </div>
  );
}

