const fs= require('fs');

// fs.writeFileSync('./Tets1.txt',"Hey There aisfdasoi");
// fs.writeFile('./Tets1.txt',"Hey There async",(err)=>{});
const result= fs.readFileSync('./Tets1.txt',"utf-8");
// console.log(result)
const os=require("os");
console.log(os.cpus().length);
