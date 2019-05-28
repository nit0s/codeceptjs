 <h1>Setting-up codeceptjs</h1>
 
 Starting work you need install the below commands:

* Install CodeceptJS with webdriverio library :

-> npm install codeceptjs webdriverio --save-dev

* Initialize CodeceptJS in current directory by running:

-> npx codeceptjs init

* Prepare Selenium Server
Install @wdio  package to automatically start and stop selenium service:

-> npm i @wdio/selenium-standalone-service --save

* Enable it in config inside plugins section:

exports.config = {
 <br>
  // inside condecept.conf.js
  <br>
  plugins: {
  <br>
    wdio: {
    <br>
      enabled: true,
      <br>
      services: ['selenium-standalone']
      <br>
    }
    <br>
  }
  <br>
}
<br>

<h7>For detailed installation please follow:</h7>
https://codecept.io/quickstart#using-selenium-webdriver
