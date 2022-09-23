// next.config.js
module.exports = {
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
  },
  trailingSlash: true,
  swcMinify: true,
  eslint: {
    dirs: ["src/"],
  },
};
