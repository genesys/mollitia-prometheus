<template>
  <div class="fuse-playground">
    <div class="fuse-playground-left">
      <div class="fuse-logs">
        <div ref="terminal" class="fuse-terminal">
          <span v-for="(log, index) in logs" :key="`log-${index}`">{{ log }}</span>
        </div>
      </div>
      <div v-for="(row, index) in rows" :key="`row-${index}`" class="fuse-row">
        <Fuse
          :ref="fuse.name"
          v-for="(fuse, index2) in row"
          :key="fuse.name"
          :context="fuse"
          :left="(row.length === 1) || (index2 !== row.length - 1)">
        </Fuse>
      </div>
      <div class="fuse-svg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path
            v-for="(path, index) in links"
            :key="`link-${index}`"
            :d="path"
          />
        </svg>
      </div>
    </div>
    <div class="fuse-playground-right">
      <div class="fuse-prometheus-content">
        <div class="fuse-prometheus-scrap" v-html="scrapData"></div>
      </div>
      <div class="fuse-prometheus-content">
        <BarChart :chart-data="chartData" :options="chartOptions"/>
      </div>
    </div>
  </div>
</template>

<script>
const FuseFactory = window.Fusible.Fuse;
import Fuse from './Fuse.vue';
import BarChart from './BarChart.vue';
export default {
  name: 'Playground',
  components: {
    Fuse,
    BarChart
  },
  data () {
    return {
      scrapData: '',
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      fuses: {},
      links: [],
      logs: [],
      rows: [
        [
          {
            name: 'Awesome Service',
            options: {
              bufferLength: 8,
              resetDelay: 5000,
              threshold: 33,
              logger: this,
              plugins: [
                window.FusiblePrometheus
              ]
            },
            color: '#2E69DB'
          }
        ],
        [
          {
            name: 'PostgreSQL',
            parent: 'Awesome Service',
            options: {
              threshold: 50
            },
            color: '#EA4F6B'
          },
          {
            name: 'FileSystem Async Utilities',
            parent: 'Awesome Service',
            options: {
              threshold: 50
            },
            color: '#F8A740'
          }
        ],
        [
          {
            name: 'Read File',
            parent: 'FileSystem Async Utilities',
            options: {
              weight: 2
            },
            color: '#4AC764'
          },
          {
            name: 'Write File',
            parent: 'FileSystem Async Utilities',
            options: {
              state: 'opened'
            },
            color: '#FF8FDD'
          }
        ]
      ]
    };
  },
  methods: {
    getFuseColor (name) {
      for (const row of this.rows) {
        for (const el of row) {
          if (el.name === name) {
            return el.color;
          }
        }
      }
    },
    updatePrometheusData () {
      const datasets = [];
      for (const fuse in this.fuses) {
        const metrics = this.fuses[fuse].metrics();
        datasets.push({
          label: fuse,
          backgroundColor: this.getFuseColor(fuse),
          data: [metrics.hit_count.value]
        });
      }
      const splits = this.fuses[this.rows[0][0].name].metrics().fullScrap().split('\n');
      for (let i = 0; i < splits.length; i++) {
        if (splits[i].startsWith('#')) {
          splits[i] = `<span class="comment">${splits[i]}</span>`
        }
      }
      this.scrapData = splits.join('<br/>');
      this.chartData = {
        labels: ['Hit Count'],
        datasets
      };
    },
    debug (msg) {
      this.logs = [
        ...this.logs,
        msg
      ];
      this.triggerUpdate();
    },
    info (msg) {
      this.logs = [
        ...this.logs,
        msg
      ];
      this.triggerUpdate();
    },
    warn (msg) {
      this.logs = [
        ...this.logs,
        msg
      ];
      this.triggerUpdate();
    },
    computeFuseLinks () {
      setTimeout(() => {
        const rootRect = this.$el.getBoundingClientRect();
        const offsetX = rootRect.left;
        const offsetY = rootRect.top;
        const links = [];
        for (const row of this.rows) {
          for (const fuse of row) {
            if (fuse.parent) {
              const fuseRef = this.$refs[fuse.name][0].$refs.container;
              const parentRef = this.$refs[fuse.parent][0].$refs.container;
              const fuseRect = fuseRef.getBoundingClientRect();
              const parentRect = parentRef.getBoundingClientRect();
              const startX = (parentRect.left + (parentRect.width / 2) - offsetX);
              const startY = parentRect.bottom - offsetY;
              const endX = (fuseRect.left + (fuseRect.width / 2) - offsetX);
              const endY = fuseRect.top - offsetY;
              links.push(`M${startX},${startY} L${endX},${endY}`);
            }
          }
        }
        this.links = [...links];
      }, 1);
    },
    triggerUpdate () {
      setTimeout(() => {
        for (const ref in this.$refs) {
          if (this.$refs[ref][0]) {
            this.$refs[ref][0].$forceUpdate();
          }
        }
        this.$refs.terminal.scrollTop = this.$refs.terminal.scrollHeight;
        this.updatePrometheusData();
      }, 1);
    }
  },
  created () {
    window.addEventListener('resize', this.computeFuseLinks, false);
    for (const row of this.rows) {
      for (const fuse of row) {
        if (fuse.parent) {
          this.fuses[fuse.name] = this.fuses[fuse.parent].child({
            name: fuse.name,
            options: fuse.options
          });
        } else {
          this.fuses[fuse.name] = new FuseFactory({
            name: fuse.name,
            options: fuse.options
          });
        }
      }
    }
  },
  mounted () {
    this.computeFuseLinks();
  },
  destroyed () {
    window.removeEventListener('resize', this.computeFuseLinks, false);
  }
}
</script>

<style lang="scss">
*[theme-type="light"] {
  --fuse-terminal-background-color: var(--madoc-black);
  --fuse-terminal-color: var(--madoc-white);
}
*[theme-type="dark"] {
  --fuse-terminal-background-color: var(--madoc-white);
  --fuse-terminal-color: var(--madoc-black);
}
div.fuse-playground {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
  > div.fuse-playground-left {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    min-width: 500px;
    > div.fuse-logs {
      height: 8em;
      background-color: var(--fuse-terminal-background-color);
      color: var(--fuse-terminal-color);
      overflow: hidden;
      > div.fuse-terminal {
        height: 100%;
        overflow: auto;
        background: repeating-linear-gradient(0deg,rgba(0,0,0,.15),rgba(0,0,0,.15) 1px,transparent 0,transparent 2px);
        > span {
          display: block;
          font-family: Inconsolata,monospace;
          text-shadow: 0 0 5px var(--madoc-github-grey-9);
        }
      }
    }
    > div.fuse-row {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      text-align: center;
    }
    > div.fuse-svg {
      pointer-events: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      > svg > path {
        stroke: var(--madoc-heading-underline-color);
        stroke-width: 1;
        fill: transparent;
      }
    }
  }
  > div.fuse-playground-right {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    min-width: 500px;
    > div.fuse-prometheus-content {
      height: 50%;
      > div.fuse-prometheus-scrap {
        > span.comment {
          color: #6a9955;
        }
      }
    }
    > div.fuse-prometheus-chart {
      height: 50%;
    }
  }
}
</style>
