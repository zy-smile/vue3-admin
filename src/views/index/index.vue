<template>
  <div>
        <el-row class="cards">
          <el-col v-for="(item,index) in listCount" :key="index" :lg="6" :sm="12" :xs="24">
            <div :class="['card-item',item.class,active === index ? 'active' : '']" @click="setActive(index)" >
              <div class="card-title">
                {{item.text}}(人)
              </div>
              <div class="card-value">
                {{item.value}}
              </div>
            </div>
          </el-col>
        </el-row>
      <el-row>
        <el-col :span="8">
          <div id="box-people"></div>
        </el-col>
        <el-col :span="16">
            <div id="box-weather">

            </div>
        </el-col>
      </el-row>
    <el-row>
      <div id="box-total"></div>
    </el-row>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import * as echarts from 'echarts'
import { options1, option2, option3 } from '../../echarts/options'
const active = ref('')
const listCount = [
  {
    text: '当天总人数：',
    value: 2000,
    class: 'green'
  }, {
    text: '本周总人数：',
    value: 5000,
    class: 'blue'
  }, {
    text: '当月总人数：',
    value: 10000,
    class: 'sky'
  }, {
    text: '本季度总人数：',
    value: 200000,
    class: 'yellow'
  }
]
const setActive = function (index) {
  active.value = index
}

nextTick(() => {
  const weather = echarts.init(document.getElementById('box-weather'))
  const peoplebox = echarts.init(document.getElementById('box-people'))
  const totalbox = echarts.init(document.getElementById('box-total'))
  weather.setOption(options1)
  peoplebox.setOption(option2)
  totalbox.setOption(option3)
})

</script>

<style lang="less" scoped>
.cards {
  display: flex;
  height: 160px;
  padding: 20px 10px;
  .el-col {
    height: 100%;
    margin-bottom: 15px;
  }
  .card-item {
    margin: 0 10px;
    height: 100%;
    background-color: #fff;
    border-radius: 12px;
    &:hover {
      box-shadow: 0 1px 5px rgba(0,0,0,10%);
    }
  }

}
#box-weather {
  width: 100%;
  height: 420px;
}
.el-row {
  margin: 30px 0;
}
#box-people {
  width: 100%;
  height: 420px;
}
#box-total {
  width: 100%;
  height: 420px;
}
</style>
