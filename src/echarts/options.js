import * as echarts from 'echarts'
export const options1 = {
    title: {
      text: '天气变化',
      textStyle: {
        color: '#242424'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['温度', '湿度']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        nameTextStyle: {
          color: '#8a8a8',
          fontSize: 13
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#d2d2d2'
          }
        },
        axisLabel: {
          color: '#8a8a8a'
        }
      }
    ],
  color: ['#a91f28', '#701aac'],
    series: [
      {
        name: '温度',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(214,30,30,1)'
            },
              {
                offset: 1,
                color: 'rgba(219,49,49,0.3)'
              }
            ], false),
            shadowColor: 'rgba(108,80,243, 0.9)',
            shadowBlur: 20
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '湿度',
        type: 'line',
        stack: 'Total',
        smooth: true,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(110,28,200,.7)'
            },
              {
                offset: 1,
                color: 'rgba(110,28,200,0.2)'
              }
            ], false),
            shadowColor: 'rgba(108,80,243, 0.9)',
            shadowBlur: 20
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
}

var colorList = [{
  type: 'linear',
  x: 0,
  y: 0,
  x2: 1,
  y2: 1,
  colorStops: [{
    offset: 0,
    color: 'rgba(51,192,205,0.01)' // 0% 处的颜色
  },
    {
      offset: 1,
      color: 'rgba(51,192,205,0.57)' // 100% 处的颜色
    }
  ],
  globalCoord: false // 缺省为 false
},
  {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(115,172,255,0.02)' // 0% 处的颜色
    },
      {
        offset: 1,
        color: 'rgba(115,172,255,0.67)' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 1,
    y: 0,
    x2: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: 'rgba(158,135,255,0.02)' // 0% 处的颜色
    },
      {
        offset: 1,
        color: 'rgba(158,135,255,0.57)' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 1,
    x2: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: 'rgba(252,75,75,0.01)' // 0% 处的颜色
    },
      {
        offset: 1,
        color: 'rgba(252,75,75,0.57)' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 1,
    y: 1,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: 'rgba(253,138,106,0.01)' // 0% 处的颜色
    },
      {
        offset: 1,
        color: '#FDB36ac2' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: 'rgba(254,206,67,0.12)' // 0% 处的颜色
    },
      {
        offset: 1,
        color: '#FECE4391' // 100% 处的颜色
      }
    ],
    globalCoord: false // 缺省为 false
  }
]
var colorLine = ['#33C0CD', '#73ACFF', '#9E87FF', '#FE6969', '#FDB36A', '#FECE43']

function getRich () {
  const result = {}
  colorLine.forEach((v, i) => {
    result[`hr${i}`] = {
      backgroundColor: colorLine[i],
      borderRadius: 3,
      width: 3,
      height: 3,
      padding: [3, 3, 0, -12]
    }
    result[`a${i}`] = {
      padding: [-11, 6, -20, 6],
      color: colorLine[i],
      backgroundColor: 'transparent',
      fontSize: 12
    }
  })
  return result
}
// const pieData = [{
//   '"name"': '北京',
//   '"value"': 25
// }, {
//   '"name"': '上海',
//   '"value"': 20
// }, {
//   '"name"': '广州',
//   '"value"': 18
// }, {
//   '"name"': '深圳',
//   "value": 15
// }, {
//   "name": '未知',
//   "value": 13
// }, {
//   '"name"': '海外',
//   '"value"': 9
// }].sort((a, b) => {
//   return b.value - a.value
// })
// pieData.forEach((v, i) => {
//   v.labelLine = {
//     lineStyle: {
//       width: 1,
//       color: colorLine[i]
//     }
//   }
// })
export const option2 = {
  series: [{
    type: 'pie',
    radius: '60%',
    center: ['50%', '50%'],
    clockwise: true,
    avoidLabelOverlap: true,
    label: {
      show: true,
      position: 'outside',
      formatter: function (params) {
        const name = params.name
        const percent = params.percent + '%'
        const index = params.dataIndex
        return [`{a${index}|${name}：${percent}}`, `{hr${index}|}`].join('\n')
      },
      rich: getRich()
    },
    itemStyle: {
      normal: {
        color: function (params) {
          return colorList[params.dataIndex]
        }
      }
    },
    data: [{
      name: '上海',
      value: 200
    }, {
      name: '北京',
      value: 300
    }, {
      name: '广州',
      value: 400
    }, {
      name: '深圳',
      value: 500
    }, {
      name: '郑州',
      value: 200
    }, {
      name: '武汉',
      value: 300
    }],
    roseType: 'radius'
  }]
}

export const option3 = {
  backgroundColor: '#fff',
  tooltip: {},
  grid: {
    top: '8%',
    left: '1%',
    right: '1%',
    bottom: '8%',
    containLabel: true
  },
  legend: {
    itemGap: 50,
    data: ['注册总量', '最新注册量'],
    textStyle: {
      color: '#333',
      borderColor: '#fff'
    }
  },
  xAxis: [{
    type: 'category',
    boundaryGap: true,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#f9f9f9'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#d1e6eb',
        margin: 15
      }
    },
    axisTick: {
      show: false
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月']
  }],
  yAxis: [{
    type: 'value',
    min: 0,
    // max: 140,
    splitNumber: 7,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#e2e2e2'
      }
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 20,
      textStyle: {
        color: '#d1e6eb'

      }
    },
    axisTick: {
      show: false
    }
  }],
  series: [{
    name: '注册总量',
    type: 'line',
    // smooth: true, //是否平滑曲线显示
    showAllSymbol: true,
    symbol: 'emptyCircle',
    symbolSize: 6,
    lineStyle: {
      normal: {
        color: '#28ffb3'
      },
      borderColor: '#f0f'
    },
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: '#fff'
      }
    },
    itemStyle: {
      normal: {
        color: '#28ffb3'
      }
    },
    tooltip: {
      show: false
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0,154,120,1)'
        },
          {
            offset: 1,
            color: 'rgba(0,0,0, 0)'
          }
        ], false),
        shadowColor: 'rgba(53,142,215, 0.9)',
        shadowBlur: 20
      }
    },
    data: [393, 438, 485, 631, 689, 824, 987]
  }, {
    name: '最新注册量',
    type: 'bar',
    barWidth: 20,
    tooltip: {
      show: false
    },
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: '#fff'
      }
    },
    itemStyle: {
      normal: {
        color: function (params) {
          var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1']
          return colorList[params.dataIndex]
        }
      }
    },
    data: [200, 382, 102, 267, 186, 315, 316]
  }]
}
