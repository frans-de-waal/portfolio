/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // output: "export", // Note: Support for static exports is currently only available on next@canary, see https://beta.nextjs.org/docs/configuring/static-export
};

module.exports = nextConfig;
