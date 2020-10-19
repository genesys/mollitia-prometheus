<template>
  <div class="fuse-wrapper">
    <div
      ref="container"
      class="fuse-container"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false">
      <div class="header">{{ name }}</div>
      <div class="content">
        <div class="state">{{ fuse.status.state }}</div>
      </div>
      <div class="percentage" :class="{ 'half-opened': fuse.status.state === 'half-opened' }">
        <div class="success" :style="{ 'width': `${100 - fuse.status.relativeErrorPercentage}%` }"></div>
      </div>
      <div class="actions" v-if="actionnable" @mouseenter="canShowTooltip = false" @mouseleave="canShowTooltip = true">
        <button class="success">
          <eva-icon @click="doSuccess" name="checkmark-circle-2" animation="pulse" title="Simulate Success"></eva-icon>
        </button>
        <button class="error">
          <eva-icon @click="doError" name="close-circle" animation="pulse" title="Simulate Failure"></eva-icon>
        </button>
      </div>
      <div v-if="canShowTooltip && showTooltip" class="tooltip" :style="computedTooltipStyle">
        <ul>
          <li><span class="key">Reset Delay:</span> {{ fuse.resetDelay }}ms</li>
          <li><span class="key">Threshold:</span> {{ fuse.threshold }}%</li>
          <li><span class="key">Buffer Length:</span> {{ fuse.bufferLength }}</li>
          <li><span class="key">Operand:</span> {{ fuse.operand }}</li>
          <li><span class="key">Weight:</span> {{ fuse.weight }}</li>
          <li><span class="key">Consecutive:</span> {{ fuse.consecutive }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const dummySuccessAsync = () => {
  return new Promise((resolve) => {
    resolve();
  });
};
const dummyErrorAsync = () => {
  return new Promise((resolve, reject) => {
    reject();
  });
};
export default {
  name: 'Fuse',
  props: {
    context: {
      type: Object,
      default: null
    },
    left: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      canShowTooltip: true,
      showTooltip: false
    };
  },
  computed: {
    name () {
      return this.context.name;
    },
    fuses () {
      return this.$parent.fuses;
    },
    fuse () {
      return this.fuses[this.name];
    },
    actionnable () {
      return this.fuse.children.length === 0;
    },
    computedTooltipStyle () {
      const style = {};
      if (this.actionnable) {
        style.bottom = '-1px';
      } else {
        style.top = '-1px';
      }
      if (this.left) {
        style.left = '100%';
      } else {
        style.right = '100%';
      }
      return style;
    }
  },
  methods: {
    async doSuccess () {
      try {
        await this.fuse.fire(dummySuccessAsync);
      } catch {}
    },
    async doError () {
      try {
        await this.fuse.fire(dummyErrorAsync);
      } catch {}
    }
  }
}
</script>

<style lang="scss" scoped>
div.fuse-wrapper {
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div.fuse-container {
    position: relative;
    background-color: var(--madoc-html-background-color);
    border: 1px solid var(--madoc-heading-underline-color);
    > div.header {
      font-weight: bold;
      padding: .5em;
      border-bottom: 1px solid var(--madoc-heading-underline-color);
    }
    > div.content {
      padding: .5em;
      border-bottom: 1px solid var(--madoc-heading-underline-color);
    }
    > div.percentage {
      height: 20px;
      background-color: #EA4F6B;
      &.half-opened {
        background-color: #F8A740;
      }
      > div.success {
        height: 20px;
        background-color: #4AC764;
        transition: .25s width ease-in-out;
      }
    }
    > div.actions {
      display: flex;
      > button {
        flex-grow: 1;
        border: none;
        background-color: unset;
        &:focus {
          outline: none;
        }
        > i {
          display: flex;
          justify-content: center;
          cursor: pointer;
        }
        &.success {
          > i {
            fill: #4AC764;
          }
        }
        &.error {
          > i {
            fill: #EA4F6B;
          }
        }
      }
    }
    > div.tooltip {
      position: absolute;
      background-color: var(--madoc-html-background-color);
      border: 1px solid var(--madoc-heading-underline-color);
      z-index: 3;
      min-width: 160px;
      > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        > li > span.key {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
