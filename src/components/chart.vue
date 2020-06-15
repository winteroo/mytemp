<template>
  <div ref="chartId"></div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: 'EChart',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      myChart: null
    };
  },
  mounted () {
    this.setCanvas();
    window.addEventListener('resize', this.resizeEvent, false);
  },
  watch: {
    option: {
      handler (n, o) {
        this.myChart.setOption(n);
      },
      deep: true
    }
  },
  methods: {
    setCanvas () {
      this.myChart = echarts.init(this.$refs.chartId, 'light');
      this.myChart.setOption(this.option);
    },
    resizeEvent () {
      this.myChart.resize();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
