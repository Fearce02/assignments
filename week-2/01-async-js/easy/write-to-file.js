const fs = require('fs');

const filename = 'newfile.txt';
const writeFile = 'Hello this is me writing into the file!';

function AsyncwriteFile() {
    fs.writeFile(filename, writeFile, 'utf8', function() {

        console.log('File has been successfully updated.');
    });
}

AsyncwriteFile();
