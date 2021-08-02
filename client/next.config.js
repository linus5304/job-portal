const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // optional
  modifyVars: {
    "@primary-color": "#470137", // primary color for all components
    "@link-color": "#470137", // link color
    "@success-color": "#52c41a", // success state color
    "@warning-color": "#faad14", // warning state color
    "@error-color": " #f5222d", // error state color
    "@font-size-base": "14px", // major text font size
    "@heading-color": "#000", // heading text color
    "@text-color": "#000", // major text color
    "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
    "@disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
    "@border-radius-base": "6px", // major border radius
    "@border-color-base": "#d9d9d9", // major border color
    "@box-shadow-base":
      " 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers },
  },
  // optional
  lessVarsFilePath: "./src/styles/variables.less",
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  //   future: {
  //     webpack5: true,
  //   },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
});
