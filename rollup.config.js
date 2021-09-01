import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import scss from "rollup-plugin-scss";
import sveltePreprocess from "svelte-preprocess";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image"; //image loader

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn("npm", ["run", "start", "--", "--dev", "--single"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default [
  {
    input: "src/main.js",
    external: [],
    output: {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: "public/build/bundle.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          hydratable: true,
          dev: !production,
        },
        preprocess: sveltePreprocess(),
      }),

      css({ output: "bundle.css" }),

      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      !production && serve(),

      !production &&
        livereload({
          watch: "public",
          verbose: false,
          delay: 200,
        }),

      production && terser(),
      alias({
        entries: [{ find: "@", replacement: "src/" }],
      }),
      scss({
        sourceMap: true,
        sass: require("sass"),
      }),
      image(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  // Server bundle
  {
    input: "src/App.svelte",
    output: {
      exports: "default",
      sourcemap: false,
      format: "cjs",
      name: "app",
      file: "public/App.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          generate: "ssr",
        },
      }),
      css({ output: "app.css" }),
      resolve(),
      commonjs(),
      production && terser(),
    ],
  },
];
