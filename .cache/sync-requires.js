const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/djaved/Documents/Development/Barcelona/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/djaved/Documents/Development/Barcelona/src/pages/404.js"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/djaved/Documents/Development/Barcelona/src/pages/index.mdx"))),
  "component---src-pages-get-started-mdx": hot(preferDefault(require("/Users/djaved/Documents/Development/Barcelona/src/pages/get_started.mdx")))
}

