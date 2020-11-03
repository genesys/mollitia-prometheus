<template>
  <div class="metrics" :style="style">
    <div class="wrapper">
      <div class="sidebar">
        <div><button title="Graphs" @click="openGraph"><i class="material-icons">insert_chart</i></button></div>
        <div><button title="Scrap" @click="openScrap"><i class="material-icons">assignment</i></button></div>
      </div>
      <div class="border">
        <div class="sidebar-content" :style="contentStyle">
          <Graphs v-show="showGraph"/>
          <Scrap v-show="!showGraph"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Graphs from './Graphs';
import Scrap from './Scrap';
export default {
  name: 'Metrics',
  components: {
    Graphs,
    Scrap
  },
  data () {
    return {
      isOpen: false,
      showGraph: true,
      width: 0
    };
  },
  computed: {
    style () {
      return {
        'right': this.isOpen ? '25%' : '0'
      };
    },
    contentStyle () {
      return {
        'width': `${this.width}px`
      };
    }
  },
  methods: {
    openGraph () {
      if (!this.showGraph) {
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
      this.showGraph = true;
      this.computeWidth();
    },
    openScrap () {
      if (this.showGraph) {
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
      this.showGraph = false;
      this.computeWidth();
    },
    computeWidth () {
      const rect = this.$parent.$el.getBoundingClientRect();
      this.width = rect.width / 4;
    }
  },
  mounted () {
    window.addEventListener('resize', this.computeWidth);
  },
  destroyed () {
    window.removeEventListener('resize', this.computeWidth);
  }
}
</script>

<style lang="scss" scoped>
div.metrics {
  border-bottom: 1px solid var(--madoc-grey-5);
  border-left: 1px solid var(--madoc-grey-5);
  position: absolute;
  right: 0;
  transition: right .25s ease-in-out;
  > div.wrapper {
    display: flex;
    > div.sidebar {
      flex-grow: 1;
      > div {
        &:not(:last-child) {
          border-bottom: 1px solid var(--madoc-grey-5);
        }
        > button {
          cursor: pointer;
          background-color: var(--madoc-github-grey-6);
          color: var(--madoc-white);
          outline: none;
          border: none;
          > i {
            margin: 5px 2px;
            font-size: 48px;
          }
        }
      }
    }
    > div.border {
      position: relative;
      width: 1px;
      > div.sidebar-content {
        position: absolute;
        border-bottom: 1px solid var(--madoc-grey-5);
        border-left: 1px solid var(--madoc-grey-5);
      }
    }
  }
}
</style>
