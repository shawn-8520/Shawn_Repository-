<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { getLanguage, LangChangeEvent } from '@/utils/lang'

const animationDuration = 3000
const radarText = {
  zh: {
    indicators: ['内容', '成员', '作品', '存储', '接口', '安全'],
    series: ['计划容量', '预期使用', '实际使用']
  },
  en: {
    indicators: ['Content', 'Members', 'Works', 'Storage', 'API', 'Security'],
    series: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
  }
}

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      lang: getLanguage()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
    window.addEventListener(LangChangeEvent, this.handleLanguageChange)
  },
  beforeDestroy() {
    window.removeEventListener(LangChangeEvent, this.handleLanguageChange)
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    handleLanguageChange(event) {
      this.lang = event.detail || getLanguage()
      this.initChart()
    },
    initChart() {
      if (!this.chart) {
        this.chart = echarts.init(this.$el, 'macarons')
      }
      const text = radarText[this.lang] || radarText.zh

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: text.indicators[0], max: 10000 },
            { name: text.indicators[1], max: 20000 },
            { name: text.indicators[2], max: 20000 },
            { name: text.indicators[3], max: 20000 },
            { name: text.indicators[4], max: 20000 },
            { name: text.indicators[5], max: 20000 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: text.series
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [5000, 7000, 12000, 11000, 15000, 14000],
              name: text.series[0]
            },
            {
              value: [4000, 9000, 15000, 15000, 13000, 11000],
              name: text.series[1]
            },
            {
              value: [5500, 11000, 12000, 15000, 12000, 12000],
              name: text.series[2]
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
