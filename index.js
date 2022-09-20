
const platform = require('platform');
   const app = platform

function plat() {

 console.log(platform.toString()) ; 
}

plat();



/*
const { detect } = require('detect-browser');
const browser = detect();

// handle the case where we don't detect the browser
if (browser) {
  console.log(browser.name);
  console.log(browser.version);
  console.log(browser.os);
}
*/