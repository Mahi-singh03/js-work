// Modules in js are two types :  local and global


//               LOCAL MODULES

// such  modules do not need to import

console.log("hi")





//             GLOBAL MODULES

// Such modules are needed to be "require"

// example are "fs" { file system module }

const x = require("fs").writeFileSync;

x("hi.txt", "hi ian manoj");



