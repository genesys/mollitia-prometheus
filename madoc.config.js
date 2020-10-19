const pkg = require('./package.json');

module.exports = {
  title: 'Mollitia Prometheus',
  description: pkg.description,
  distPath: '.docs',
  assets: [
    {
      src: './node_modules/mollitia/dist/mollitia.umd.js'
    },
    {
      src: './dist/mollitia-prometheus.umd.js'
    }
  ],
  head: [
    '<script src="/assets/mollitia.umd.js"></script>',
    '<script src="/assets/mollitia-prometheus.umd.js"></script>'
  ],
  watch: [
    './dist'
  ],
  components: [
    require('./docs/vue/index.js')
  ]
};
