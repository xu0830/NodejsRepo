var event = require("events");

var eventEmitter = new event.EventEmitter();

var connectHandler = function connected(){
	console.log("连接成功！");
	
	//	触发 data_received 事件
	eventEmitter.emit("data_received");
}

//绑定事件
eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received", function(){
	console.log("data received successfully!");
});

eventEmitter.on("error", function(){
	console.log("something wrong");
});

eventEmitter.emit("error");

eventEmitter.emit("connection");



console.log("程序执行完毕！");