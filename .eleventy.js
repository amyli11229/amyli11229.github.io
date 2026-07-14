const MarkdownIt = require("markdown-it");
const mdInline = new MarkdownIt({ html: false, linkify: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("cv.pdf");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("inlineMarkdown", (value) => {
    if (!value) return "";
    return mdInline.renderInline(String(value));
  });

  eleventyConfig.addCollection("bioContent", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/pages/bio.md");
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("content/projects/*.md")
      .filter(
        (item) =>
          item.data.published !== false &&
          item.data.title &&
          item.fileSlug !== "README"
      )
      .sort(
        (a, b) =>
          (a.data.sort_order ?? 999) - (b.data.sort_order ?? 999)
      );
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
