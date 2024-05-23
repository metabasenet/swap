<template>
    <div class="common-layout">
        <el-container class="container-xxl">
            <div class="container_bgc"></div>
            <el-aside class="responsive-aside"></el-aside>
            <el-main>
                <el-row :gutter="10">
                    <el-col :span="16" style="margin:auto" :xs="24" :sm="24" :md="14" :lg="14">
                        <div class="liquidity-box">
                            <div>
                                <div class="title_header">
                                    <svg-icon name="bnb"></svg-icon>
                                    <span>{{tokenAname}}</span>/<span>{{tokenBname}}</span>
                                    <!-- <div class="sort_box">
                                        <el-button text icon="Switch" circle size="large" />
                                    </div> -->
                                </div>
                                <div class="chart-btn">
                                    <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="timeSharing">
                                        <h2 style="color: #fff;">TS</h2>
                                        </el-button>
                                    <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="changePeriod(2)"><h3 style="color: #fff;">1M</h3></el-button>
                                    <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="changePeriod(3)"><h3 style="color: #fff;">1H</h3></el-button>
                                    <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="changePeriod(4)"><h3 style="color: #fff;">1D</h3></el-button>
                                        <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="changePeriod(5)"><h3 style="color: #fff;">1W</h3></el-button>
                                    <el-button type="primary" color="#1fc7d4" style="margin-top:5px"
                                        @click="changePeriod(6)"><h3 style="color: #fff;">1mouth</h3></el-button>
                                    <!-- <el-button type="primary" style="margin-top:5px" @click="changePeriod('week')">weekLine</el-button> -->
                                </div>
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
import { useRoute } from 'vue-router';
import { getLinePrice,getLinePriceFlow } from '@/api/linechart';
import { getTokens } from '@/api/Liquiditys'
const route = useRoute();
const chartRef = ref(null)
let chartInstance = null;
const upColor = '#ec0000';
const downColor = '#00da3c';
// const time = ref(1);
const page = ref(1)
const pageSize = ref(1000)
const tokenA = ref(route.params.tokenA)
const tokenB = ref(route.params.tokenB)
const tokenAname = ref('')
const tokenBname = ref('')
let data = [];
const findName = async(token)=>{
    const res = await getTokens();
    const foundItem = res.data.find(item => item.contractaddress === token);
    return foundItem.ercsymbol
}
async function updateTokenNames() {
  tokenAname.value = await findName(tokenA.value);
  console.log(tokenAname.value);
  tokenBname.value = await findName(tokenB.value);
  console.log(tokenBname.value);
}
updateTokenNames()
// 计算移动平均线
function calculateMA(data, n) {
    let sum = 0;
    return data.map((item, index) => {
        sum += item.last;
        if (index < n) {
            return '';
        } else {
            sum -= data[index - n].last;
            return (sum / n).toFixed(2);
        }
    });
}
// 曲线图
const timeSharing = async()=>{
    const res = await getLinePriceFlow(tokenA.value, tokenB.value, page.value, pageSize.value)
    data = res.data.list
    // 使用新的数据更新图表
    setcurveOptions(data)
}
timeSharing()
const setcurveOptions = async (data) => {
    const option = {
        tooltip: {
            trigger: 'axis',
            // 坐标轴的指示器
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
        },
        xAxis: [
            {
                type: 'category',
                data: data.map(item => item.time),
            },

        ],
        yAxis: [
            {
                // 缩放
                scale: true,
                // 分割一个空间
                splitArea: {
                    show: true
                }
            },
        ],
        dataZoom: [
            {
                show: true,
                // xAxisIndex: [0, 1],
                type: 'slider',
            }
        ],
        series: [
            {
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#1fc7d4'
                },
                symbol: 'none',//隐藏小圆点
                data: data.map(item => item.rate)
            },
        ],
    };
    // 如果图表实例已存在，则更新选项
    if (chartInstance) {
        chartInstance.setOption(option);
    } else {

        // 否则，初始化图表实例并设置选项
        chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption(option);
    }

};
// 切换时间周期的函数
const changePeriod = async (time) => {
    // 根据所选的时间周期更新图表数据
    // 假设 fetchData 是用来获取数据的异步函数
    const res = await getLinePrice(tokenA.value, tokenB.value, time, page.value, pageSize.value)
    data = res.data.list
    // 使用新的数据更新图表
    setChartOptions(data)
}
// 设置K线图表选项
const setChartOptions = async (data) => {
    const option = {
        // title: {
        //     text: '日K线图',
        // },
        // animation: false,
        // legend: {
        //     bottom: 10,
        //     left: 'center',
        //     data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
        // },
        tooltip: {
            trigger: 'axis',
            // 坐标轴的指示器
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
                data: data.map(item => item.time),
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
                // 缩放
                scale: true,
                // 分割一个空间
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
                // top: '85%',
                // startValue: data.length - 30,
                // endValue: data.length
                // 从98%开始
                // start: 98,或者用startValue: data.length - 30
                // 到100%结束
                // end: 100  或者用endValue: data.length
            }
        ],
        series: [
            {
                // name: 'Dow-Jones index',
                type: 'candlestick',
                // data: data.values,
                data: data.map(item => {
                    return [item.first, item.last, item.min, item.max]
                }),
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: undefined,
                    borderColor0: undefined
                }
            },
            // {
            //     name: 'MA5',
            //     type: 'line',
            //     data: calculateMA(data, 5),
            //     smooth: true,
            //     lineStyle: {
            //         opacity: 0.5
            //     }
            // },
            // {
            //     name: 'MA20',
            //     type: 'line',
            //     data: calculateMA(data, 20),
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
    // 如果图表实例已存在，则更新选项
    if (chartInstance) {
        chartInstance.setOption(option);
    } else {

        // 否则，初始化图表实例并设置选项
        chartInstance = echarts.init(chartRef.value);
        chartInstance.setOption(option);
    }

};
onMounted(() => {
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
    flex-wrap: wrap;
}
.title_header{
    display: flex;
    align-items: center;
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