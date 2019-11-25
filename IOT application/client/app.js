var socket = require("socket.io-client")("http://goyal123.herokuapp.com");

socket.on("connect", function(){
	console.log("connected to server");
	socket.on("updateState",function(state){
	console.log("The new state is: "+state);
	});
})
