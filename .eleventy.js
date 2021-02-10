let dev = process.env.MODE === 'dev';

module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy({
    'src/static': 'static',
    '__build__': '.',
  });

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
