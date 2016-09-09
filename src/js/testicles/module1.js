var $ = require("jquery");

var $jq = $('#app-jquery');

$jq.find('h1').text("Jquery says Hi!");

$.get("http://localhost:3000", function(data){
	console.log("jb :jq: ", data);
	$jq.find('.dev__payload span').text(data.title);
});

//module #1
document.write("module 1 stuff");
