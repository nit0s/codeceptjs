exports.config = {
  tests: './*_test.js',
  output: './output',
  plugins:{
    wdio:{
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Google_test'
}