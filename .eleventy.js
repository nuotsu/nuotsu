module.exports = eleventyConfig => {
  eleventyConfig.setQuietMode(true);

  eleventyConfig.addPassthroughCopy({
    // 'src/styles'
  });

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
