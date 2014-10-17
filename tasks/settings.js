
var package = require('../package.json');

module.export = {
  del: {
    silent: true
  },
  minify: {
    processImport: false,
    keepSpecialComments: 0
  },
  uglify: {
    mangle: true
  },
  prefix: {
    browsers: [
      "last 2 version",
      "> 1%",
      "opera 12.1",
      "safari 6",
      "ie 9",
      "bb 10",
      "android 4"
    ]
  },
  header: {
    package: package
  },
  sourcemap: {
    includeContent: true,
    sourceRoot: '/src'
  },
  minJS: {
    extname: '.min.js'
  },
  minCSS: {
    extname: '.min.css'
  }
};