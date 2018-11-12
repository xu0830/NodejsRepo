var fs = require("fs");

//	同步读取文件
var data = fs.readFileSync("input.txt");

console.log("the content of input.txt is following: ");
console.log(data.toString());
console.log("文件读取完成");

//	异步读取文件
var content = fs.readFile("input.txt", function(err, data){
	if(err){
		console.log("failed to read file");
	}else{　
		console.log("the content of input.txt　reading　by  async is following：");
		console.log(data.toString());
	}
});
console.log("文件读取完成");
