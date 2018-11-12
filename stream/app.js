var fs = require("fs");

var writer = fs.createWriteStream("output.txt");

writer.write("write something in output.txt", "utf-8");

writer.end();