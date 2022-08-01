import multiInput from "rollup-plugin-multi-input";
import styles from "rollup-plugin-styles";

const cssConfig = {
  input: ["src/**/style/index.js"],
  plugins: [multiInput(), styles({ mode: 'extract' })],
  output: {
    dir: "es/",
    sourcemap: true,
    assetFileNames: "[name].css",
  },
};

export default [cssConfig];
