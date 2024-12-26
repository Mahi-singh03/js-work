// import { x } from "./exporter"
// console.log(x)    // simple export cannot be use in node as node use older version of js


const exported = require("./exporter")

x = exported.add(10,10)
y = exported.subtract(10, 10)

console.log(x,y)