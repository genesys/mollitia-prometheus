<template>
  <div class="graphs">
    <div class="interval-bar">
      <div class="interval-progress" :style="style"></div>
    </div>
    <div class="graph-content">
      <div class="graph-wrapper">
        <BarChart :chart-data="chartData" :options="chartOptions"/>
      </div>
    </div>
  </div>
</template>

<script>
// TODO filter by metric
export default {
  name: 'Graphs',
  data () {
    return {
      metricIndex: 0,
      metrics: [],
      colors: {},
      delay: 5000,
      progressInterval: null,
      interval: null,
      percent: 0,
      chartData: {
        labels: ['Total Executions'],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    style () {
      return {
        width: `${this.percent}%`
      };
    }
  },
  methods: {
    updateGraphs () {
      const datasets = [];
      const metrics = this.$mollitiaPrometheus.metrics();
      for (const metric in metrics) {
        for (const circuit in metrics['total_executions'].circuits) {
          datasets.push({
            label: circuit,
            backgroundColor: this.getRandomColor(circuit),
            data: [metrics['total_executions'].circuits[circuit]]
          });
        }
        for (const module in metrics['total_executions'].modules) {
          for (const circuit in metrics['total_executions'].modules[module]) {
            datasets.push({
              label: `${module} - ${circuit}`,
              backgroundColor: this.getRandomColor(`${module} - ${circuit}`),
              data: [metrics['total_executions'].modules[module][circuit]]
            });
          }
        }
      }
      this.chartData = {
        labels: ['Total Executions'],
        datasets
      };
    },
    setProgressInterval () {
      this.progressInterval = setInterval(() => {
        this.percent += (100 * 100 / this.delay);
        if (this.percent > 100) {
          this.percent = 0;
        }
      }, 100);
    },
    getRandomColor (name) {
      if (!this.colors[name]) {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        this.colors[name] = color;
      }
      return this.colors[name];
    }
  },
  mounted () {
    this.setProgressInterval();
    this.interval = setInterval(() => {
      this.updateGraphs();
    }, this.delay);
  },
  destroyed () {
    clearInterval(this.progressInterval);
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss" scoped>
div.graphs {
  background-color: var(--madoc-github-grey-6);
  height: 420px;
  overflow: hidden;
  > div.interval-bar {
    width: 100%;
    height: 5px;
    > div.interval-progress {
      width: 0;
      height: 5px;
      background-color: var(--madoc-white);
      transition: width .1s ease-out;
    }
  }
  > div.graph-content {
    margin: 10px;
    > div.graph-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
