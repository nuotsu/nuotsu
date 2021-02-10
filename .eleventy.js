let dev = process.env.MODE === 'dev';

module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  return {
    htmlTemplateEngine: 'njk',

    dir: {
      output: dev
        ? '__dev__'
        : 'dist',
      input:    'src/pages',
      includes: '../includes',
    }
  }
}
