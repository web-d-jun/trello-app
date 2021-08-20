const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  preprocess: sveltePreprocess({
    sass: {
      sync: true,
      implementation: require("sass"),
    },
  }),
};