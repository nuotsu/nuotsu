let dev = process.env.MODE === 'dev';

module.exports = {
  plugins: [
    require('postcss-import')({
      path: 'src/styles'
    }),

    require('postcss-nested'),

    require('postcss-custom-media')({
      importFrom: 'src/styles/modules/custom-media.css'
    }),

    require('postcss-preset-env')({
      features: {
        'custom-properties': false
      }
    }),

    !dev && require('cssnano'),
  ]
}
