/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  i18n: {
    locales: ["ua"],
    defaultLocale: "ua",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
}
