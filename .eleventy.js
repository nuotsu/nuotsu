module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  return {
    htmlTemplateEngine: 'njk',

    dir: {
      output:   '__dev__',
      input:    'src/pages',
      data:     '../data',
      includes: '../includes',
      layouts:  '../layouts',
    }
  }
}
