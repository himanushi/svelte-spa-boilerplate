module.exports = {
  "mode": "jit",
  "plugins": [],
  "purge": [
    "./public/*.html",
    "./src/**/*.{js,ts,svelte}"
  ],

  /*
   * eslint では、CSS で ":" を使用するとパーサーエラーが発生することがあります。
   * In eslint, using ":" in CSS may cause a parser error.
   * @apply focus:outline-non → @apply focus_outline-non
   */
  "separator": "_",
  "theme": {},
  "variants": {}
};
