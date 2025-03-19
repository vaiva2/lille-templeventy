module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/js");
  
    return {
      passthroughFileCopy: true,
      dir: {
        input: "src",
        output: "public", // or "." if you want to output to root
        includes: "_includes",
      },
    };
  };