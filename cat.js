let fs = require("fs");
module.exports = function(arg) {
  fs.readFile(arg, "utf8", (err, file) => {
    if (err) {
      throw err;
    } else {
      console.log(file);
    }
  });
};
