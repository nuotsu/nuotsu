let dev = process.env.MODE === 'dev';

module.exports = {
  mount: {
    '__dev__':        '/',
    'src/static':     '/static',
    'src/components': '/components',
    'src/scripts':    '/scripts',
    'src/styles':     '/styles',
  },

  buildOptions: {
    out: '__dist__',
    clean: true,
  },

  devOptions: {
    open: 'none',
    output: 'stream',
    // hmrDelay: 500,
  },

  plugins: [
    !dev
      ? '@snowpack/plugin-postcss'
      : ['@snowpack/plugin-run-script', {
        cmd: '',
        watch: 'postcss src/styles/*.css -d __dev__/styles/ -w'
      }],

    '@snowpack/plugin-svelte',

    ['@snowpack/plugin-run-script', {
      cmd:    'eleventy',
      watch:  'eleventy --watch'
    }],

    ['@snowpack/plugin-webpack',
      {
        outputPattern: {
          css: 'styles/[name].bundle.css',
          js: 'scripts/[name].bundle.js',
        }
      },
    ],
  ],
}
