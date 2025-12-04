const fs = require('fs');
const path = require('path');

function writeDataFile() {
  // Construct the absolute path to file.txt
  const filePath = path.join(__dirname, 'file.txt');

  // Write the data synchronously
  fs.writeFileSync(filePath, 'We will not miss the exam next time');
}

module.exports = writeDataFile;
