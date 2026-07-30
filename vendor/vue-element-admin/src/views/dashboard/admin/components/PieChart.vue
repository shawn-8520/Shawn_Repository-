<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { getLanguage, LangChangeEvent } from '@/utils/lang'

const pieLabels = {
  zh: ['知识文件', '作品集', '桌面文件', '画布卡片', '成员'],
  en: ['Knowledge Files', 'Works', 'Desktop Files', 'Canvas Cards', 'Members']
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
      const labels = pieLabels[this.lang] || pieLabels.zh

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: labels
        },
        series: [
          {
            name: this.lang === 'zh' ? '项目数据占比' : 'Project Data Mix',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: 320, name: labels[0] },
              { value: 240, name: labels[1] },
              { value: 149, name: labels[2] },
              { value: 100, name: labels[3] },
              { value: 59, name: labels[4] }
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
