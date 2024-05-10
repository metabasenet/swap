<template>
    <div class="common-layout">
        <el-container class="container-xxl">
            <div class="container_bgc"></div>
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="16" style="margin:auto" :xs="24" :sm="24" :md="14" :lg="14">
                        <div class="liquidity-box">
                            <div class="chart-btn">
                                <el-button type="primary" @click="changePeriod('month')">monthLine</el-button>
                                <el-button type="primary" @click="changePeriod('week')">weekLine</el-button>
                                <el-button type="primary" @click="changePeriod('day')">dayLine</el-button>
                                <el-button type="primary" @click="changePeriod('hour')">hourLine</el-button>
                                <el-button type="primary" @click="changePeriod('minute')">minuteLine</el-button>
                            </div>
                            <div ref="chartRef" style="height: 320px;width:100%">
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-aside class="responsive-aside"></el-aside>
        </el-container>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const chartRef = ref(null)
let chartInstance = null;
const upColor = '#ec0000';
const downColor = '#00da3c';
// const rawData = [
//     ['2023-01-01', 100, 105, 95, 103, 123456],
//     ['2023-01-02', 90, 105, 80, 103, 1230],
//     ['2023-01-03', 20, 80, 40, 100, 7894],
//     ['2023-01-04', 60, 90, 50, 105, 32156],
// ];

// function splitData(rawData) {
//     let categoryData = [];
//     let values = [];
//     let volumes = [];
//     for (let i = 0; i < rawData.length; i++) {
//         categoryData.push(rawData[i][0]);
//         values.push([rawData[i][1], rawData[i][2], rawData[i][3], rawData[i][4]]);
//         volumes.push([rawData[i][0], rawData[i][4]]);
//     }
//     return {
//         categoryData: categoryData,
//         values: values,
//         volumes: volumes,
//     };
// }


// function calculateMA(dayCount, data) {
//     const result = [];
//     for (let i = 0; i < data.values.length; i++) {
//         if (i < dayCount) {
//             result.push(null);
//             continue;
//         }
//         let sum = 0;
//         for (let j = 0; j < dayCount; j++) {
//             sum += data.values[i - j][1];
//         }
//         result.push(sum / dayCount);
//     }
//     return result;
// }


function changePeriod(period) {

    // fetchData(period).then(newData => {

    //     updateChart(newData);
    // });
}

// function updateChart(newData) {

//   option.xAxis.data = newData.xAxisData;
//   option.series[0].data = newData.seriesData;

// //   chartInstance.setOption(option);
// }

const setChartOptions = () => {
    // const data = splitData(rawData);

    const option = {
        title: {
            text: 'Daily K chart',
        },
        // animation: false,
        // legend: {
        //     bottom: 10,
        //     left: 'center',
        //     data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
        // },
        tooltip: {
            trigger: 'axis',

            axisPointer: {
                type: 'cross'
            },
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function (pos, params, el, elRect, size) {
                const obj = {
                    top: 10
                };
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            }
            // extraCssText: 'width: 170px'
        },
        // axisPointer: {
        //     link: [
        //         {
        //             xAxisIndex: 'all'
        //         }
        //     ],
        //     label: {
        //         backgroundColor: '#777'
        //     }
        // },
        // toolbox: {
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: false
        //         },
        //         brush: {
        //             type: ['lineX', 'clear']
        //         }
        //     }
        // },
        // brush: {
        //     xAxisIndex: 'all',
        //     brushLink: 'all',
        //     outOfBrush: {
        //         colorAlpha: 0.1
        //     }
        // },
        // visualMap: {
        //     show: false,
        //     seriesIndex: 5,
        //     dimension: 2,
        //     pieces: [
        //         {
        //             value: 1,
        //             color: downColor
        //         },
        //         {
        //             value: -1,
        //             color: upColor
        //         }
        //     ]
        // },
        // grid: [
        //     {
        //         left: '10%',
        //         right: '8%',
        //         height: '50%'
        //     },
        //     {
        //         left: '10%',
        //         right: '8%',
        //         top: '63%',
        //         height: '16%'
        //     }
        // ],
        xAxis: [
            {
                type: 'category',
                // data: data.categoryData,
                data: ['2019-12-3', '2019-12-4', '2019-12-5', '2019-12-6'],
                // boundaryGap: false,
                // axisLine: { onZero: false },
                // splitLine: { show: false },
                // min: 'dataMin',
                // max: 'dataMax',
                // axisPointer: {
                //     z: 100
                // }
            },
            // {
            //     type: 'category',
            //     gridIndex: 1,
            //     data: data.categoryData,
            //     boundaryGap: false,
            //     axisLine: { onZero: false },
            //     axisTick: { show: false },
            //     splitLine: { show: false },
            //     axisLabel: { show: false },
            //     min: 'dataMin',
            //     max: 'dataMax'
            // }
        ],
        yAxis: [
            {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            // {
            //     scale: true,
            //     gridIndex: 1,
            //     splitNumber: 2,
            //     axisLabel: { show: false },
            //     axisLine: { show: false },
            //     axisTick: { show: false },
            //     splitLine: { show: false }
            // }
        ],
        dataZoom: [
            // {
            //     type: 'inside',
            //     xAxisIndex: [0, 1],
            //     start: 98,
            //     end: 100
            // },
            {
                show: true,
                // xAxisIndex: [0, 1],
                type: 'slider',
                top: '85%',
                // start: 98,
                // end: 100  
            }
        ],
        series: [
            {
                // name: 'Dow-Jones index',
                type: 'candlestick',
                // data: data.values,
                data: [
                    [20, 23, 19, 28],
                    [23, 27, 21, 31],
                    [22, 19, 25, 16],
                    [20, 23, 19, 28],
                ],
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: undefined,
                    borderColor0: undefined
                }
            },
            // {
            //     name: 'MA5',
            //     data: calculateMA(5, data),
            //     smooth: true,
            //     lineStyle: {
            //         opacity: 0.5
            //     }
            // },
            // {
            //     name: 'MA20',
            //     type: 'line',
            //     data: calculateMA(20, data),
            //     smooth: true,
            //     lineStyle: {
            //         opacity: 0.5
            //     }
            // },
            // {
            //     name: 'MA30',
            //     type: 'line',
            //     data: calculateMA(30, data),
            //     smooth: true,
            //     lineStyle: {
            //         opacity: 0.5
            //     }
            // },
            // {
            //     name: 'Volume',
            //     type: 'bar',
            //     xAxisIndex: 1,
            //     yAxisIndex: 1,
            //     data: data.volumes
            // }
        ],
    };

    if (chartInstance) {
        chartInstance.setOption(option);
    } else {

        chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption(option);
    }
};
onMounted(() => {
    setChartOptions();
});
</script>

<style scoped>
.container-xxl {
    position: relative;
    background-color: #ebf6ff;
}

.responsive-aside {
    width: 3vw;
    transition: width 0.5s ease;
}

.liquidity-box {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
}

.chart-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 7px;
}

@media (min-width: 768px) {
    .responsive-aside {
        width: 3vw;
        opacity: 0.5;
        /* background-color: #fff;  */
    }

}

@media (max-width: 768px) {
    .el-main {
        --el-main-padding: 5px;
    }

    .liquidity-box {
        padding: 13px;
    }
}
</style>