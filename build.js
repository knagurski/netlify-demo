const fs = require('fs');
const formatDate = require('date-fns/format');

const homePage = fs.readFileSync('./src/index.html', 'utf8');
const currentTime = new Date();
const modifiedHomePage = homePage.replace('<!-- build-time -->', formatDate(currentTime, "PPP 'at' HH:mm:ss"));

if (fs.existsSync('./build/index.html')) {
  fs.unlinkSync('./build/index.html');
  fs.rmdirSync('./build');
}

fs.mkdirSync('./build');
fs.writeFileSync('./build/index.html', modifiedHomePage);
