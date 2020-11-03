<template>
  <div class="scrap">
    <div class="interval-bar">
      <div class="interval-progress" :style="style"></div>
    </div>
    <div class="scrap-content" v-html="scrap"></div>
  </div>
</template>

<script>
export default {
  name: 'Scrap',
  data () {
    return {
      delay: 5000,
      progressInterval: null,
      interval: null,
      scrap: '',
      percent: 0
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
    updateScrap () {
      const splits = this.$mollitiaPrometheus.scrap().split('\n');
      for (let i = 0; i < splits.length; i++) {
        if (splits[i].startsWith('#')) {
          splits[i] = `<span class="comment">${splits[i]}</span>`
        }
      }
      this.scrap = splits.join('<br/>');
    },
    setProgressInterval () {
      this.progressInterval = setInterval(() => {
        this.percent += (100 * 100 / this.delay);
        if (this.percent > 100) {
          this.percent = 0;
        }
      }, 100);
    }
  },
  mounted () {
    this.setProgressInterval();
    this.interval = setInterval(() => {
      this.updateScrap();
    }, this.delay);
  },
  destroyed () {
    clearInterval(this.progressInterval);
    clearInterval(this.interval);
  }
}
</script>

<style lang="scss">
div.scrap {
  background-color: var(--madoc-github-grey-6);
  height: 425px;
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
  > div.scrap-content {
    height: 400px;
    white-space: nowrap;
    overflow: auto;
    padding: 10px;
    > span.comment {
      color: #6a9955;
    }
  }
}
</style>
