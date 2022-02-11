const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "Images");

fs.readdir(directoryPath, function (err, files) {
  if (err) return console.log("Wrong folder path");
  files.forEach((file, i) => {
    console.log(file, i);
    fs.rename("Images/" + file, "Images/" + i + ".jpg", function (err) {
      if (err) console.log("error in renaming");
      console.log("File Renamed!");
    });
  });
});

/*
Reference:
https://nodejs.dev/learn/the-nodejs-fs-module
https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5
*/
