/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [],
  },
  publicRuntimeConfig: {
    version,
  },
  serverRuntimeConfig: {},
};

module.exports = withBundleAnalyzer(nextConfig);
