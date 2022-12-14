/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  i18n: {
    locales: ["uk"],
    defaultLocale: "uk",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
}
