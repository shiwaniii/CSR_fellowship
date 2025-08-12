const path =require("path");
const currentPath =path.join(__dirname);
console.log("currentPath", currentPath);

const fs= require("fs");
console.info(`Reading file from ${currentPath}`);
const data =fs.readFileSync(path.join(currentPath, "./function.js"), "utf-8");

console.log(data);
fs.writeFileSync(path.join(currentPath, "./op.txt"), "update from code");

//os module
const os =require("os");
console.log(os.platform());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.home.dir());

