let dev = process.env.MODE === 'dev';

module.exports = {
  preprocess: require('svelte-preprocess')({
    postcss: {
      plugins: [
        require('postcss-nested'),
        require('postcss-custom-media')({
          importFrom: 'src/styles/modules/custom-media.css'
        }),
        require('postcss-preset-env')({
          features: {
            'custom-properties': false,
          }
        }),
        !dev ? require('cssnano') : () => {},
      ]
    }
  }),
}
