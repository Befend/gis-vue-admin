<script setup lang="ts" name="dataVisualize">
import { ref, onMounted } from "vue"
import Pie from "./components/pie.vue"
import Curve from "./components/curve.vue"

const tabActive = ref(1)
const pieRef = ref()
const curveRef = ref()

onMounted(() => {
  pieRef.value.initChart(pieData)
  curveRef.value.initChart(curveData)
})

const tab = [
  { label: "未来7日", name: 1 },
  { label: "近七日", name: 2 },
  { label: "近一月", name: 3 },
  { label: "近三月", name: 4 },
  { label: "近半年", name: 5 },
  { label: "近一年", name: 6 }
]
const pieData = [
  { value: 5000, name: "Gitee 访问量" },
  { value: 5000, name: "GitHub 访问量" }
]
const curveData = [
  { value: 30, spotName: "掘金" },
  { value: 90, spotName: "CSDN" },
  { value: 10, spotName: "Gitee" },
  { value: 70, spotName: "GitHub" },
  { value: 20, spotName: "知乎" },
  { value: 60, spotName: "MyBlog" },
  { value: 55, spotName: "简书" },
  { value: 80, spotName: "StackOverFlow" },
  { value: 50, spotName: "博客园" }
]
</script>

<template>
  <div class="dataVisualize-box">
    <div class="card top-box">
      <div class="top-title">数据可视化</div>
      <el-tabs v-model="tabActive" class="demo-tabs">
        <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
      </el-tabs>
      <div class="top-content">
        <el-row :gutter="40">
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="item-left sle">
              <span class="left-title">访问总数</span>
              <div class="img-box">
                <img src="./images/book-sum.png" alt="" />
              </div>
              <span class="left-number">848.132w</span>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="item-center">
              <div class="gitee-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_person.png" alt="" />
                </div>
                <span class="item-value">2222</span>
                <span class="traffic-name sle">Gitee 访问量</span>
              </div>
              <div class="gitHub-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_team.png" alt="" />
                </div>
                <span class="item-value">2222</span>
                <span class="traffic-name sle">GitHub 访问量</span>
              </div>
              <div class="today-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/today.png" alt="" />
                </div>
                <span class="item-value">4567</span>
                <span class="traffic-name sle">今日访问量</span>
              </div>
              <div class="yesterday-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/book_sum.png" alt="" />
                </div>
                <span class="item-value">1234</span>
                <span class="traffic-name sle">昨日访问量</span>
              </div>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <div class="item-right">
              <div class="echarts-title">Gitee / GitHub 访问量占比</div>
              <div class="book-echarts">
                <Pie ref="pieRef" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="card bottom-box">
      <div class="bottom-title">数据来源</div>
      <div class="bottom-tabs">
        <el-tabs v-model="tabActive" class="demo-tabs">
          <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="curve-echarts">
        <Curve ref="curveRef" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dataVisualize-box {
  .top-box {
    box-sizing: border-box;
    padding: 25px 40px 0;
    margin-bottom: 10px;
    .top-title {
      margin-bottom: 10px;
      font-family: DIN;
      font-size: 18px;
      font-weight: bold;
    }
    .top-content {
      margin-top: 10px;
      .item-left {
        box-sizing: border-box;
        height: 100%;
        padding: 40px 0 30px 30px;
        overflow: hidden;
        color: #ffffff;
        background: url("./images/book-bg.png");
        background-position: 50%;
        background-size: cover;
        border-radius: 20px;
        .left-title {
          font-family: DIN;
          font-size: 20px;
        }
        .img-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          margin: 40px 0 20px;
          background: #ffffff;
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgb(0 0 0 / 14%);
          img {
            width: 60px;
            height: 65px;
          }
        }
        .left-number {
          overflow: hidden;
          font-family: DIN;
          font-size: 62px;
        }
      }
      .item-center {
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
        height: 100%;
        .traffic-box {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          width: 47%;
          height: 48%;
          padding: 25px;
          border-radius: 30px;
          .traffic-img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
            background-color: #ffffff;
            border-radius: 19px;
          }
        }
        img {
          width: 33px;
          height: 33px;
        }
        .item-value {
          margin-bottom: 4px;
          font-family: DIN;
          font-size: 28px;
          font-weight: bold;
          color: #1a1a37;
        }
        .traffic-name {
          overflow: hidden;
          font-family: DIN;
          font-size: 15px;
          color: #1a1a37;
          white-space: nowrap;
        }
        .gitee-traffic {
          background: url("./images/1-bg.png");
          background-color: #e8faea;
          background-size: 100% 100%;
        }
        .gitHub-traffic {
          background: url("./images/2-bg.png");
          background-color: #e7e1fb;
          background-size: 100% 100%;
        }
        .today-traffic {
          background: url("./images/3-bg.png");
          background-color: #fdf3e9;
          background-size: 100% 100%;
        }
        .yesterday-traffic {
          background: url("./images/4-bg.png");
          background-color: #f0f5fb;
          background-size: 100% 100%;
        }
      }
      .item-right {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 430px;
        border: 1px solid #e5e7eb;
        border-radius: 25px;
        .echarts-title {
          padding: 15px 20px;
          font-family: DIN;
          font-size: 18px;
          font-weight: bold;
          border-bottom: 1px solid #e5e7eb;
        }
        .book-echarts {
          flex: 1;
          width: 100%;
        }
      }
    }
  }
  .bottom-box {
    position: relative;
    padding: 20px 0 0;
    .bottom-title {
      position: absolute;
      top: 75px;
      left: 50px;
      font-family: DIN;
      font-size: 18px;
      font-weight: bold;
    }
    .bottom-tabs {
      padding: 0 50px;
    }
    .curve-echarts {
      box-sizing: border-box;
      height: 400px;
      padding: 0 50px;
    }
  }
}
</style>
