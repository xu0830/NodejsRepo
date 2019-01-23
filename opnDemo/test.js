const opn = require("opn");

const express = require("express");

const app = express();

console.log(process.env.NODE_ENV);

// opn("a.jpg").then(()=>{
	// console.log("open successfully!");
// });