const fs = require('fs');

const inputFile = 'cleaner.txt';

fs.readFile(inputFile, 'utf8', function(err, data) {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const removedspaces = data.replace(/\s+/g, ' ');

    fs.writeFile(inputFile, removedspaces, 'utf8', function(err) {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        console.log('Extra Spaces successfully removed!.');
    });
});
