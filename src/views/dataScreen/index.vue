<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeUnmount } from "vue"
import { HOME_URL } from "@/config/config"
import { randomNum } from "@/utils/util"
import { useRouter } from "vue-router"
import { useTime } from "@/hooks/useTime"
import { ECharts } from "echarts"
import mapChart from "./components/chinaMapChart.vue"
import AgeRatioChart from "./components/AgeRatioChart.vue"
import AnnualUseChart from "./components/AnnualUseChart.vue"
import HotPlateChart from "./components/HotPlateChart.vue"
import MaleFemaleRatioChart from "./components/MaleFemaleRatioChart.vue"
import OverNext30Chart from "./components/OverNext30Chart.vue"
import PlatformSourceChart from "./components/PlatformSourceChart.vue"
import RealTimeAccessChart from "./components/RealTimeAccessChart.vue"
// import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
// import alarmList from "./assets/alarmList.json";

const router = useRouter()
const dataScreenRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
    dataScreenRef.value.style.width = `1920px`
    dataScreenRef.value.style.height = `1080px`
  }
  // 初始化echarts
  initCharts()
  // 为浏览器绑定事件
  window.addEventListener("resize", resize)
})

// 声明echarts实例
interface ChartProps {
  [key: string]: ECharts | null
}
const dataScreen: ChartProps = {
  chart1: null,
  chart2: null,
  chart3: null,
  chart4: null,
  chart5: null,
  chart6: null,
  chart7: null,
  mapChart: null
}

// 获取子组件的ref
interface ChartExpose {
  initChart: (params: any) => ECharts
}
const RealTimeAccessRef = ref<ChartExpose>()
const AgeRatioRef = ref<ChartExpose>()
const AnnualUseRef = ref<ChartExpose>()
const HotPlateRef = ref<ChartExpose>()
const MaleFemaleRatioRef = ref<ChartExpose>()
const OverNext30Ref = ref<ChartExpose>()
const PlatformSourceRef = ref<ChartExpose>()
const MapchartRef = ref<ChartExpose>()

// 初始化 charts参数
let ageData = [
  {
    value: 200,
    name: "10岁以下",
    percentage: "16%"
  },
  {
    value: 110,
    name: "10 - 18岁",
    percentage: "8%"
  },
  {
    value: 150,
    name: "18 - 30岁",
    percentage: "12%"
  },
  {
    value: 310,
    name: "30 - 40岁",
    percentage: "24%"
  },
  {
    value: 250,
    name: "40 - 60岁",
    percentage: "20%"
  },
  {
    value: 260,
    name: "60岁以上",
    percentage: "20%"
  }
]
let hotData = [
  {
    value: 79999,
    name: "峨眉山",
    percentage: "80%",
    maxValue: 100000
  },
  {
    value: 59999,
    name: "稻城亚丁",
    percentage: "60%",
    maxValue: 100000
  },
  {
    value: 49999,
    name: "九寨沟",
    percentage: "50%",
    maxValue: 100000
  },
  {
    value: 39999,
    name: "万里长城",
    percentage: "40%",
    maxValue: 100000
  },
  {
    value: 29999,
    name: "北京故宫",
    percentage: "30%",
    maxValue: 100000
  }
]
let platFromData = [
  {
    value: 40,
    name: "智慧文旅平台",
    percentage: "40%"
  },
  {
    value: 10,
    name: "携程",
    percentage: "10%"
  },
  {
    value: 20,
    name: "飞猪",
    percentage: "20%"
  },
  {
    value: 30,
    name: "其他渠道",
    percentage: "30%"
  }
]
let annualData = [
  {
    label: new Date().getFullYear() - 2 + "年",
    value: ["184", "90", "120", "0", "30", "100", "80", "40", "20", "510", "350", "180"]
  },
  {
    label: new Date().getFullYear() - 1 + "年",
    value: ["118", "509", "366", "162", "380", "123", "321", "158", "352", "474", "154", "22"]
  },
  {
    label: new Date().getFullYear() + "年",
    value: ["548", "259", "113", "90", "69", "512", "23", "49", "28", "420", "313", "156"]
  }
]
let mapData = [
  {
    fromName: "北京",
    toName: "上海",
    coords: [
      [116.4551, 40.2539],
      [121.4648, 31.2891]
    ]
  },
  {
    fromName: "上海",
    toName: "北京",
    coords: [
      [121.4648, 31.2891],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: "北京",
    toName: "广州",
    coords: [
      [116.4551, 40.2539],
      [113.5107, 23.2196]
    ]
  },
  {
    fromName: "广州",
    toName: "北京",
    coords: [
      [113.5107, 23.2196],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: "北京",
    toName: "成都",
    coords: [
      [116.4551, 40.2539],
      [103.9526, 30.7617]
    ]
  },
  {
    fromName: "成都",
    toName: "北京",
    coords: [
      [103.9526, 30.7617],
      [116.4551, 40.2539]
    ]
  },
  {
    fromName: "成都",
    toName: "新疆维吾尔自治区",
    coords: [
      [103.9526, 30.7617],
      [85.294711, 41.371801]
    ]
  },
  {
    fromName: " 新疆维吾尔自治区",
    toName: "成都",
    coords: [
      [85.294711, 41.371801],
      [103.9526, 30.7617]
    ]
  }
]

// 初始化 echarts
const initCharts = (): void => {
  dataScreen.chart1 = RealTimeAccessRef.value?.initChart(0.5) as ECharts
  dataScreen.chart2 = AgeRatioRef.value?.initChart(ageData) as ECharts
  dataScreen.chart3 = AnnualUseRef.value?.initChart({
    data: annualData,
    unit: annualData.map(val => val.label),
    columns: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    colors: ["#FFA600", "#007AFE", "#FF4B7A"]
  }) as ECharts
  dataScreen.chart4 = HotPlateRef.value?.initChart({
    data: hotData,
    colors: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]
  }) as ECharts
  dataScreen.chart5 = MaleFemaleRatioRef.value?.initChart({
    man: 0.6,
    woman: 0.4
  }) as ECharts
  dataScreen.chart6 = OverNext30Ref.value?.initChart({
    unit: ["访问量"],
    data: new Array(30).fill("").map(val => {
      val = randomNum(1, 20000)
      return val
    })
  }) as ECharts
  dataScreen.chart7 = PlatformSourceRef.value?.initChart({
    data: platFromData,
    colors: ["#078dbc", "#6ad40b", "#6172fc", "#1786ff", "#ffbe2f", "#4dc89d", "#b797df", "#ffd3aa"]
  }) as ECharts
  dataScreen.mapChart = MapchartRef.value?.initChart(mapData) as ECharts
}

// 大屏告警数据
// interface AlarmProps {
// 	id: number;
// 	warnMsg: string;
// 	label: string;
// }
// const alarmData: AlarmProps[] = reactive(alarmList);

// 根据浏览器大小推断缩放比例
const getScale = (width = 1920, height = 1080) => {
  let ww = window.innerWidth / width
  let wh = window.innerHeight / height
  return ww < wh ? ww : wh
}

// 监听浏览器 resize 事件
const resize = () => {
  if (dataScreenRef.value) {
    dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
  }
  // 使用了 scale 的echarts其实不需要需要重新计算缩放比例
  Object.values(dataScreen).forEach(chart => {
    chart && chart.resize()
  })
}

// 获取当前时间
const { nowTime } = useTime()
let timer: NodeJS.Timer | null = null
let time: Ref<string> = ref(nowTime.value)
timer = setInterval(() => {
  time.value = useTime().nowTime.value
}, 1000)

// 销毁时触发
onBeforeUnmount(() => {
  window.removeEventListener("resize", resize)
  clearInterval(timer!)
  Object.values(dataScreen).forEach(val => val?.dispose())
})
</script>

<template>
  <div class="dataScreen-container">
    <div class="dataScreen" ref="dataScreenRef">
      <div class="dataScreen-header">
        <div class="header-lf">
          <span class="header-screening" @click="router.push(HOME_URL)">首页</span>
        </div>
        <div class="header-ct">
          <div class="header-ct-title">
            <span>智慧旅游可视化大数据展示平台</span>
            <div class="header-ct-warning">平台高峰预警信息（2条）</div>
          </div>
        </div>
        <div class="header-rg">
          <span class="header-download">统计报告</span>
          <span class="header-time">当前时间：{{ time }}</span>
        </div>
      </div>
      <div class="dataScreen-main">
        <div class="dataScreen-lf">
          <div class="dataScreen-top">
            <div class="dataScreen-main-title">
              <span>实时游客统计</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <RealTimeAccessChart ref="RealTimeAccessRef" />
            </div>
          </div>
          <div class="dataScreen-center">
            <div class="dataScreen-main-title">
              <span>男女比例</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <MaleFemaleRatioChart ref="MaleFemaleRatioRef" />
            </div>
          </div>
          <div class="dataScreen-bottom">
            <div class="dataScreen-main-title">
              <span>年龄比例</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <AgeRatioChart ref="AgeRatioRef" />
            </div>
          </div>
        </div>
        <div class="dataScreen-ct">
          <div class="dataScreen-map">
            <div class="dataScreen-map-title">景区实时客流量</div>
            <!-- <vue3-seamless-scroll
							:list="alarmData"
							class="dataScreen-alarm"
							:step="0.5"
							:hover="true"
							:limitScrollNum="3"
						>
							<div class="dataScreen-alarm">
								<div class="map-item" v-for="item in alarmData" :key="item.id">
									<img src="./images/dataScreen-alarm.png" alt="" />
									<span class="map-alarm sle">{{ item.label }} 预警：{{ item.warnMsg }}</span>
								</div>
							</div>
						</vue3-seamless-scroll> -->
            <mapChart ref="MapchartRef" />
          </div>
          <div class="dataScreen-cb">
            <div class="dataScreen-main-title">
              <span>未来30天游客量趋势图</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <OverNext30Chart ref="OverNext30Ref" />
            </div>
          </div>
        </div>
        <div class="dataScreen-rg">
          <div class="dataScreen-top">
            <div class="dataScreen-main-title">
              <span>热门景区排行</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <HotPlateChart ref="HotPlateRef" />
            </div>
          </div>
          <div class="dataScreen-center">
            <div class="dataScreen-main-title">
              <span>年度游客量对比</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <AnnualUseChart ref="AnnualUseRef" />
            </div>
          </div>
          <div class="dataScreen-bottom">
            <div class="dataScreen-main-title">
              <span>预约渠道数据统计</span>
              <img src="./images/dataScreen-title.png" alt="" />
            </div>
            <!-- chart区域 -->
            <div class="dataScreen-main-chart">
              <PlatformSourceChart ref="PlatformSourceRef" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dataScreen-container {
  width: 100%;
  height: 100%;
  background: url("./images/bg.png") no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;
  .dataScreen {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s;
    transform-origin: left top;
    .dataScreen-header {
      display: flex;
      width: 100%;
      height: 38px;
      .header-lf,
      .header-rg {
        position: relative;
        width: 567px;
        height: 100%;
        background: url("./images/dataScreen-header-left-bg.png") no-repeat;
        background-size: 100% 100%;
      }
      .header-ct {
        position: relative;
        flex: 1;
        height: 100%;
        .header-ct-title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 82px;
          font-family: YouSheBiaoTiHei;
          font-size: 32px;
          line-height: 78px;
          color: #05e8fe;
          text-align: center;
          letter-spacing: 4px;
          background: url("./images/dataScreen-header-center-bg.png") no-repeat;
          background-size: 100% 100%;
          .header-ct-warning {
            position: absolute;
            bottom: -42px;
            left: 50%;
            width: 622px;
            height: 44px;
            font-family: YouSheBiaoTiHei;
            font-size: 14px;
            line-height: 16px;
            line-height: 44px;
            color: #ffffff;
            text-align: center;
            letter-spacing: 1px;
            background: url("./images/dataScreen-header-warn-bg.png") no-repeat;
            background-size: 100% 100%;
            transform: translateX(-50%);
          }
        }
      }
      .header-screening,
      .header-download {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;
        box-sizing: border-box;
        width: 136px;
        height: 42px;
        padding-right: 4px;
        font-family: YouSheBiaoTiHei;
        font-size: 18px;
        font-weight: 400;
        line-height: 42px;
        color: #29fcff;
        text-align: center;
        cursor: pointer;
        background: url("./images/dataScreen-header-btn-bg-l.png") no-repeat;
        background-size: 100% 100%;
      }
      .header-download {
        left: 0;
        padding-right: 0;
        background: url("./images/dataScreen-header-btn-bg-r.png") no-repeat;
      }
      .header-time {
        position: absolute;
        top: 0;
        right: 14px;
        width: 310px;
        font-family: YouSheBiaoTiHei;
        font-size: 17px;
        font-weight: 400;
        line-height: 38px;
        color: #05e8fe;
        white-space: nowrap;
      }
    }
    .dataScreen-main {
      box-sizing: border-box;
      display: flex;
      flex: 1;
      width: 100%;
      padding: 12px 42px 20px;
      .dataScreen-lf {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 394px;
        height: 100%;
        margin-right: 40px;
        .dataScreen-top,
        .dataScreen-center,
        .dataScreen-bottom {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          padding-top: 54px;
        }
        .dataScreen-top {
          height: 37%;
          background: url("./images/dataScreen-main-lt.png") no-repeat;
          background-size: 100% 100%;
        }
        .dataScreen-center {
          height: 30%;
          background: url("./images/dataScreen-main-lc.png") no-repeat;
          background-size: 100% 100%;
        }
        .dataScreen-bottom {
          height: 27%;
          margin-bottom: 0;
          background: url("./images/dataScreen-main-lb.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .dataScreen-ct {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        margin-right: 40px;
        .dataScreen-map {
          position: relative;
          box-sizing: border-box;
          flex: 1;
          width: 100%;
          margin-top: 78px;
          .dataScreen-map-title {
            position: absolute;
            top: 10px;
            left: 0;
            z-index: 99;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            width: 270px;
            height: 25px;
            padding-left: 30px;
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 5px;
            background: url("./images/map-title-bg.png") no-repeat;
            background-size: 100% 100%;
          }
          .dataScreen-alarm {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 99;
            box-sizing: border-box;
            width: 100%;
            height: 76px;
            padding: 2px 30px;
            overflow: hidden;
            background: url("./images/dataScreen-warn-bg.png") no-repeat;
            background-size: 100% 100%;
            .map-item {
              display: flex;
              align-items: center;
              height: 37px;
              cursor: pointer;
              img {
                width: 15px;
                height: 15px;
                margin-top: 3px;
                margin-right: 6px;
              }
              span {
                font-size: 18px;
                color: rgb(255 183 0 / 74.7%);
              }
            }
          }
        }
        .dataScreen-cb {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          height: 252px;
          padding-top: 54px;
          background: url("./images/dataScreen-main-cb.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .dataScreen-rg {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 394px;
        height: 100%;
        .dataScreen-top,
        .dataScreen-center,
        .dataScreen-bottom {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          padding-top: 54px;
        }
        .dataScreen-top {
          height: 37%;
          background: url("./images/dataScreen-main-rt.png") no-repeat;
          background-size: 100% 100%;
        }
        .dataScreen-center {
          height: 30%;
          background: url("./images/dataScreen-main-rc.png") no-repeat;
          background-size: 100% 100%;
        }
        .dataScreen-bottom {
          height: 27%;
          margin-bottom: 0;
          background: url("./images/dataScreen-main-rb.png") no-repeat;
          background-size: 100% 100%;
        }
      }
      .dataScreen-main-title {
        position: absolute;
        top: 1px;
        left: 0;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 12px;
          font-family: YouSheBiaoTiHei;
          font-size: 18px;
          line-height: 16px;
          color: #ffffff;
          letter-spacing: 1px;
        }
        img {
          width: 68px;
          height: 7px;
        }
      }
      .dataScreen-main-chart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
