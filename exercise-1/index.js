const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const filesContent = (currentPath, extension) => {
    fsPromises.readdir(currentPath)
        .then(files => {
            let filteredFiles = files.filter(file => file.includes(extension));

            filteredFiles.map(file => {
                const filePath = currentPath + '/' + file
                
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log(data + '\n');
                })
            })
        })
        .catch(err => console.log(err));
};

filesContent(path.join(__dirname, '/files'), '.md');





