const nextConfig = {
  reactStrictMode: true,
  env: {
    MAP_TOKEN: process.env.MAP_TOKEN,
    DOMAIN: process.env.DOMAIN,
  },
};

module.exports = nextConfig;
