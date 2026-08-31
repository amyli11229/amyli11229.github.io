const MarkdownIt = require("markdown-it");
const mdInline = new MarkdownIt({ html: false, linkify: true });

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("cv.pdf");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.svg");

  eleventyConfig.addFilter("inlineMarkdown", (value) => {
    if (!value) return "";
    return mdInline.renderInline(String(value));
  });

  eleventyConfig.addFilter("whereWide", (items, wide = true) => {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => Boolean(item && item.wide) === Boolean(wide));
  });

  eleventyConfig.addFilter("featured", (items, isFeatured = true) => {
    if (!Array.isArray(items)) return [];
    return items
      .filter((item) => Boolean(item.data && item.data.featured) === Boolean(isFeatured))
      .sort((a, b) => {
        const orderA = a.data.featured_order ?? a.data.sort_order ?? 999;
        const orderB = b.data.featured_order ?? b.data.sort_order ?? 999;
        return orderA - orderB;
      });
  });

  eleventyConfig.addFilter("pad2", (value) => {
    const n = Number(value);
    if (!Number.isFinite(n)) return String(value ?? "");
    return String(Math.trunc(n)).padStart(2, "0");
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
