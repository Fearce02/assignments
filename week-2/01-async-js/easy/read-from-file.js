const fs = require('fs');

const filename = 'newfile.txt';

function ReadnewFile() {
    fs.readFile(filename, 'utf8', (err, data) => {
       
        console.log(' Content inside the file is: ', data);
    });
}

let ans = 0
        for (let i = 0; i < 100000000; i++) {
            ans = ans + i
        }
        console.log(" Calculation completed " + ans);


setTimeout(ReadnewFile, 1000);
