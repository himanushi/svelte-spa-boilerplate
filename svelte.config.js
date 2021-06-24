module.exports = { preprocess: require("svelte-preprocess")({
  defaults: { script: "typescript" },
  postcss: { plugins: [
    require("postcss-100vh-fix"),
    require("tailwindcss"),
    require("autoprefixer")
  ] }
}) };
