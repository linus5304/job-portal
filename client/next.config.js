const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  })
  
  module.exports = withBundleAnalyzer({
    // This is just your regular next.config.js options. For example:
    // images: {
    //  domains: ["storage.googleapis.com"],
    //},
  })